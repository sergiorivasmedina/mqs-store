const express = require("express")
const app = express()

const User = require('../user.model')
const Role = require('../../roles/role.model');

app.put('/user/:id', async (req, res) => {
    const { name, email, ruc, status, idRole, availableBrands } = req.body
    const newUser = { name, mail: email, ruc, status, idRole, availableBrands }
    const userUpdated = await User.findByIdAndUpdate(req.params.id, newUser, {new: true}).select('name mail status idRole availableBrands')
    const role = await Role.findById(userUpdated.idRole);
    let userResponse = {
        _id: userUpdated._id,
        name: userUpdated.name,
        email: userUpdated.mail,
        status: userUpdated.status,
        role: role,
        availableBrands: userUpdated.availableBrands
    }
    res.json(userResponse)
})

module.exports = app;