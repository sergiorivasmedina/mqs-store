const express = require("express")
const app = express()

const Brand = require('../brand.model')

app.get('/brands', async (_req, res) => {
    const brands = await Brand.find()
    res.json(brands)
})

module.exports = app;