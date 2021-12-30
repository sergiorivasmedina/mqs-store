const express = require("express")
const app = express()

const ComponentDetail = require('../componentDetail.model')

app.get('/component-details/component/:idComponent', async (req, res) => {
    const componentDetail = await ComponentDetail.find({ idComponent: req.params.idComponent })
    res.json(componentDetail);
})

module.exports = app;