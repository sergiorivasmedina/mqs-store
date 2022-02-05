const express = require("express");
const app = express();
const { uploadBrandToS3, deleteFileStream } = require('../../../../common-middleware');

const Brand = require('../../brand.model');

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

app.put('/brand/:id', uploadBrandToS3.array("productPicture"), async (req, res) => {
    const { description, status, deletedPictures } = req.body

    // Se debe llamar el objeto para validar si tiene datos en photos
    let currentBrand = await Brand.findById(req.params.id, 'photos -_id');

    if (typeof currentBrand.photos == "undefined" || currentBrand.photos === null || !Array.isArray(currentBrand.photos)) {
        // crear un nuevo arreglo para que se pasen todas las fotos
        currentBrand.photos = [];
    }
    addImagesLinks(req.files, currentBrand.photos);

    let deletedPicturesObj = JSON.parse(deletedPictures);
    currentBrand.photos = callDeletePhotos(deletedPicturesObj, currentBrand.photos);

    const newBrand = { description, status, photos: currentBrand.photos }
    const componentBrandUpdated = await Brand.findByIdAndUpdate(req.params.id, newBrand, { new: true })
    res.json(componentBrandUpdated)
})

module.exports = app;