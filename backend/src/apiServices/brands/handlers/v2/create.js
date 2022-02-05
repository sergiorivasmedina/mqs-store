const express = require("express");
const app = express();
const { uploadS3 } = require('../../../../common-middleware');

// Brand Model
const Brand = require('../../brand.model')

function addImagesLinks(files, photos) {

    if (Array.isArray(files) && files.length) {
        files.forEach(element => {
            let key = element.key;
            photos.push(key);
        });
    }
}

app.post('/brand', uploadS3.array("productPicture"), async (req, res) => {
    const { description, status } = req.body;

    let photos = [];
    addImagesLinks(req.files, photos);

    const brand = new Brand({ description, status, photos });
    await brand.save();
    res.status(201).json(brand);
})

module.exports = app