const express = require("express")
const app = express()

const Brand = require('../../brand.model')

app.put('/brand/:id', async (req, res) => {
    const { description, status, photos } = req.body
    const newBrand = { description, status, photos }
    const brandUpdated = await Brand.findByIdAndUpdate(req.params.id, newBrand, {new: true})
    res.json(brandUpdated)
})

module.exports = app;