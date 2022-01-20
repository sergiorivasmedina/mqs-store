const express = require("express")
const app = express()
const { uploadS3 } = require('../../../../common-middleware');

const ComponentDetail = require('../../componentDetail.model')

function addImagesLinks(files, photos) {

    if (Array.isArray(files) && files.length) {
        files.forEach(element => {
            let key = element.key;
            photos.push(key);
        });
    } else {
        photos.length = 0;
    }
}

app.put('/component-detail/:idDetail', uploadS3.array("productPicture"), async (req, res) => {
    
    const { partNumber, description, price, idComponent, idBrand, status } = req.body;

    // TODO: Se debe llamar el objeto para validar si tiene datos en photos
    let currentComponentDetail = await ComponentDetail.findById(req.params.idDetail, 'photos -_id');
    console.info(`photos before: ${JSON.stringify(currentComponentDetail.photos)}`)

    if (typeof currentComponentDetail.photos == "undefined" || currentComponentDetail.photos === null || !Array.isArray(currentComponentDetail.photos)) {
        // crear un nuevo arreglo para que se pasen todas las fotos
        currentComponentDetail.photos = [];
    }
    addImagesLinks(req.files, currentComponentDetail.photos);
    console.info(`photos after: ${JSON.stringify(currentComponentDetail.photos)}`)

    const newComponentDetail = { partNumber, description, price, idComponent, idBrand, status, photos: currentComponentDetail.photos }
    const componentDetailUpdated = await ComponentDetail.findByIdAndUpdate(req.params.idDetail, newComponentDetail, { new: true })
    res.json(componentDetailUpdated)
})

module.exports = app;