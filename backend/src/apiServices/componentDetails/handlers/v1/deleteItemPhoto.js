const express = require("express")
const app = express()
const { deleteFileStream } = require('../../../../common-middleware');

const ComponentDetail = require('../../componentDetail.model');

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

app.put('/component-detail/:id/delete-photo', async (req, res) => {
    
    // traer el component detail asociado al id y la key de la imagen
    let id = req.params.id;
    let photoKey = req.body.key;

    const componentDetail = await ComponentDetail.findById(id);
    let newComponentDetail = componentDetail;
    let photos = componentDetail.photos;

    // iterar array photos y eliminar imagen asociada
    var resultPhotos = arrayRemove(photos, photoKey);

    // eliminar de s3
    deleteFileStream(photoKey);

    newComponentDetail.photos = resultPhotos;
    const componentDetailUpdated = await ComponentDetail.findByIdAndUpdate(id, newComponentDetail, { new: true });
    res.json(componentDetailUpdated);
})

module.exports = app;