const express = require("express")
const app = express()

const ComponentDetails = require('../componentDetail.model');
const Brand = require('../../brands/brand.model');
const Component = require('../../components/component.model');

app.get('/component-details', async (_req, res) => {
    const componentDetails = await ComponentDetails.find();
    let componentDetailsResponse = await Promise.all(componentDetails.map(async (response) => {
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
    
    res.json(componentDetailsResponse);
})

module.exports = app;