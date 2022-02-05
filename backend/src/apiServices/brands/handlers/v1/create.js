const express = require("express")
const app = express()

// Brand Model
const Brand = require('../../brand.model')

app.post('/brand', async (req, res) => {
    const { description, status, photos } = req.body
    const brand = new Brand({ description, status, photos })
    await brand.save()
    res.json(brand)
})

module.exports = app