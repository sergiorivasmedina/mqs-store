const express = require("express")
const app = express()

const Role = require('../role.model')

app.get("/role/:idRol", async (req, res) => {
    const role = await Role.findById(req.params.idRol)
    res.json(role)
})

module.exports = app