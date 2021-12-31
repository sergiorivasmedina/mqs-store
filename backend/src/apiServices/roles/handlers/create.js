const express = require("express")
const app = express()

// Role Model
const Role = require('../role.model')

app.post('/role', async (req, res) => {
    const { description, status } = req.body
    const role = new Role({ description, status })
    await role.save()
    res.json(role)
})

module.exports = app