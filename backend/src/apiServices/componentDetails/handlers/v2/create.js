const express = require("express")
const app = express()
const { uploadS3 } = require('../../../../common-middleware');

const ComponentDetail = require('../../componentDetail.model');

function addImagesLinks(files, photos) {

    if (Array.isArray(files) && files.length) {
        files.forEach(element => {
            let key = element.key;
            photos.push(key);
        });
    }
}

app.post('/component-detail/', uploadS3.array("productPicture"), async (req, res) => {
    
    const { partNumber, code, description, price, idComponent, idBrand, status } = req.body;

    let photos = [];
    addImagesLinks(req.files, photos);

    const componentDetail = new ComponentDetail({ partNumber, code, description, price, idComponent, idBrand, status, photos });
    await componentDetail.save();
    res.json(componentDetail);
})

module.exports = app;