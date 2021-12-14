const express = require("express")
const app = express()

const Component = require('../component.model')

app.put('/component/:id', async (req, res) => {
    const { description, status } = req.body
    const newComponent = { description, status }
    const componentUpdated = await Component.findByIdAndUpdate(req.params.id, newComponent, { new: true })
    res.json(componentUpdated)
})

module.exports = app;