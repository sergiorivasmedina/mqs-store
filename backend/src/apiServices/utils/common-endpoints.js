const express = require("express")
const app = express()
const { getFileStream } = require('../../common-middleware');

// Obtener imagen, usando nombrede la imagen
app.get('/images/:key', (req, res) => {
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
})

module.exports = app;