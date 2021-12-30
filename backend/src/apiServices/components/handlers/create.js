const express = require("express")
const app = express()

const Component = require('../component.model')

app.post('/component', async (req, res) => {
    const { description, status, idBrand } = req.body
    const component = new Component({ description, status, idBrand })
    await component.save()
    res.json(component)
})

module.exports = app;