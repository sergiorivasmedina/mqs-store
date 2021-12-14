const express = require("express")
const app = express()

// Brand Model
const Brand = require('../brand')

app.post('/brand', async (req, res) => {
    const { description, status } = req.body
    const brand = new Brand({ description, status })
    await brand.save()
    res.json(brand)
})

module.exports = app