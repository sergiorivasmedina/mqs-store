const express = require("express")
const app = express()

const ComponentDetail = require('../componentDetail.model')

app.post('/component-detail/', async (req, res) => {
    const { partNumber, description, price, idComponent, idBrand, status } = req.body
    const componentDetail = new ComponentDetail({ partNumber, description, price, idComponent, idBrand, status })
    await componentDetail.save()
    res.json(componentDetail)
})

module.exports = app;