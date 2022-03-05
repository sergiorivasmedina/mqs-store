const express = require("express");
const app = express();

const Role = require('../role.model');

app.get("/role/description/:description", async (req, res) => {
    const roles = await Role.find({ status: 1 });
    let roleFound = roles.find(role => role.description.toLowerCase() === req.params.description.toLowerCase());
    if (roleFound) {
        return res.status(200).json(roleFound);
    }
    res.status(404).json({ message: 'Role not found' })
})

module.exports = app