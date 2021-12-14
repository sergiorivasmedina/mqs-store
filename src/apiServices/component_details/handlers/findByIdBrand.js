const express = require("express")
const app = express()

app.get('/component-details/brand/:id_brand', (req, res) => {
    const { id_brand } = req.params;
    console.log(id_brand);
    res.json({ "message": id_brand });
})

module.exports = app;