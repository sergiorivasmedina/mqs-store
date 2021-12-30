const express = require("express")
const app = express()

const Component = require('../component.model')

app.get('/component/:idbrand', async (req, res) => {
    const component = await Component.find({ idBrand: req.params.idbrand })
    res.json(component)
})

module.exports = app;