const express = require("express");
const app = express();

const Brand = require('../../brand.model');
const { getFileStream } = require('../../../../common-middleware');

app.get('/brand/:id/image', async (req, res) => {
    const brand = await Brand.findById(req.params.id);
    if (brand.photos.length > 0) {
        const readStream = getFileStream(brand.photos[0]);
        readStream.pipe(res);
    } else {
        res.redirect(process.env.FRONTEND_URL + '/assets/images/mqs/image_not_available.png');
    }
})

module.exports = app;