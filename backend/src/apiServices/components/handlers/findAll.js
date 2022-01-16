const express = require("express")
const app = express()

const Component = require('../component.model')

app.get('/components', async (_req, res) => {
    const components = await Component.find()
    res.json(components)
})

module.exports = app;