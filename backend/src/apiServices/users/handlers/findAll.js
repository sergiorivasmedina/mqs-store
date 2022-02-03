const express = require("express");
const app = express();

const User = require('../user.model');
const Role = require('../../roles/role.model');

app.get('/users', async (_req, res) => {
    const users = await User.find().select('name mail ruc idRole status availableBrands');
    let usersReponse = await Promise.all(users.map(async (response) => {
        const role = await Role.findById(response.idRole);
        return {
            _id: response._id,
            name: response.name,
            email: response.mail,
            status: response.status,
            role: role,
            availableBrands: response.availableBrands
        }
    }));
    res.json(usersReponse);
})

module.exports = app;