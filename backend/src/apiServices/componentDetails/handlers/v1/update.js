const express = require("express")
const app = express()

const ComponentDetail = require('../../componentDetail.model')

app.put('/component-detail/:idDetail', async (req, res) => {
    const { partNumber, description, price, idComponent, idBrand, status } = req.body
    const newComponentDetail = { partNumber, description, price, idComponent, idBrand, status }
    const componentDetailUpdated = await ComponentDetail.findByIdAndUpdate(req.params.idDetail, newComponentDetail, { new: true })
    res.json(componentDetailUpdated)
})

module.exports = app;