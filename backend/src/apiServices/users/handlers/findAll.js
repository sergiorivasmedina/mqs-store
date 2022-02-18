const express = require("express");
const app = express();

const User = require('../user.model');
const Role = require('../../roles/role.model');

app.get('/users', async (_req, res) => {
    const users = await User.find().select('name lastName mail cellphone companyName ruc idRole status availableBrands');
    let usersReponse = await Promise.all(users.map(async (response) => {
        const role = await Role.findById(response.idRole);
        return {
            _id: response._id,
            name: response.name,
            lastName: response.lastName,
            email: response.mail,
            cellphone: response.cellphone,
            companyName: response.companyName,
            ruc: response.ruc,
            status: response.status,
            role: role,
            availableBrands: response.availableBrands
        }
    }));
    res.json(usersReponse);
})

module.exports = app;