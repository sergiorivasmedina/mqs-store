const express = require("express")
const app = express()

const Role = require('../role.model')

app.get("/roles", async (_req, res) => {
    const roles = await Role.find({ status: 1 });
    res.json(roles)
})

module.exports = app