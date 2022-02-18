const express = require("express")
const app = express()

const User = require('../user.model')
const Role = require('../../roles/role.model');

app.put('/user/:id', async (req, res) => {
    const { name, lastName, email, cellphone, companyName, ruc, status, idRole, availableBrands } = req.body
    const newUser = { name, lastName, email, cellphone, companyName, ruc, status, idRole, availableBrands }
    const userUpdated = await User.findByIdAndUpdate(req.params.id, newUser, {new: true}).select('name lastName mail cellphone companyName ruc idRole status availableBrands')
    const role = await Role.findById(userUpdated.idRole);
    let userResponse = {
        _id: userUpdated._id,
        name: userUpdated.name,
        lastName: userUpdated.lastName,
        email: userUpdated.mail,
        cellphone: userUpdated.cellphone,
        companyName: userUpdated.companyName,
        ruc: userUpdated.ruc,
        status: userUpdated.status,
        role: role,
        availableBrands: userUpdated.availableBrands
    }
    res.json(userResponse)
})

module.exports = app;