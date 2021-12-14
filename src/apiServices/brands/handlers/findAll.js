const express = require("express")
const app = express()

const Brand = require('../brand')

app.get('/brands', async (req, res) => {
    const brands = await Brand.find()
    res.json(brands)
})

module.exports = app;