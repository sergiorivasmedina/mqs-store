const express = require("express")
const app = express()
const { uploadS3, deleteFileStream } = require('../../../../common-middleware');

const ComponentDetail = require('../../componentDetail.model')

function addImagesLinks(files, photos) {

    if (Array.isArray(files) && files.length) {
        files.forEach(element => {
            let key = element.key;
            photos.push(key);
        });
    }
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

function callDeletePhotos(deletedPictures, photos) {
    if (Array.isArray(deletedPictures) && deletedPictures.length)  {
        deletedPictures.forEach(element => {
            let picName = element.name;
            deleteFileStream(picName);
            photos = arrayRemove(photos, picName);
        });
    }
    return photos;
}

app.put('/component-detail/:idDetail', uploadS3.array("productPicture"), async (req, res) => {
    
    const { partNumber, code, description, price, idComponent, idBrand, status, deletedPictures } = req.body;

    // Se debe llamar el objeto para validar si tiene datos en photos
    let currentComponentDetail = await ComponentDetail.findById(req.params.idDetail, 'photos -_id');

    if (typeof currentComponentDetail.photos == "undefined" || currentComponentDetail.photos === null || !Array.isArray(currentComponentDetail.photos)) {
        // crear un nuevo arreglo para que se pasen todas las fotos
        currentComponentDetail.photos = [];
    }
    addImagesLinks(req.files, currentComponentDetail.photos);

    let deletedPicturesObj = JSON.parse(deletedPictures);
    currentComponentDetail.photos = callDeletePhotos(deletedPicturesObj, currentComponentDetail.photos);

    const newComponentDetail = { partNumber, code, description, price, idComponent, idBrand, status, photos: currentComponentDetail.photos }
    const componentDetailUpdated = await ComponentDetail.findByIdAndUpdate(req.params.idDetail, newComponentDetail, { new: true })
    res.json(componentDetailUpdated)
})

module.exports = app;