const express = require("express")
const app = express()

const Brand = require('../brand')

app.get("/brand/:id", async (req, res) => {
    const brand = await Brand.findById(req.params.id)
    res.json(brand)
})

module.exports = app