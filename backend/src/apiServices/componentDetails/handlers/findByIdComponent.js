const express = require("express")
const app = express()

const ComponentDetail = require('../componentDetail.model')
const Brand = require('../../brands/brand.model');
const Component = require('../../components/component.model');

app.get('/component-details/brand/:idBrand/component/:idComponent', async (req, res) => {
    const componentDetail = await ComponentDetail.find({ idBrand: req.params.idBrand, idComponent: req.params.idComponent, status: 1 })
    let componentDetailResponse = await Promise.all(componentDetail.map(async (response) => {
        const brand = await Brand.findById(response.idBrand);
        const component = await Component.findById(response.idComponent);
        return {
            _id: response._id,
            partNumber: response.partNumber,
            description: response.description,
            price: response.price,
            status: response.status,
            brand: brand,
            component: component
        }
    }))
    res.json(componentDetailResponse);
})

module.exports = app;