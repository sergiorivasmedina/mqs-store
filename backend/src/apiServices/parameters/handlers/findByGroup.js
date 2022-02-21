const express = require("express");
const app = express();

const Parameter = require('../parameter.model');

app.get("/parameter/group/:group/role/:idRole", async (req, res) => {
    let parameter = await Parameter.findOne({ group: req.params.group });
    parameter.value = parameter.value && parameter.value
        .filter(x => x.permission.includes(req.params.idRole) || x.permission.includes('ALL'))
        .map(x => {
            x.children = x.children && x.children.filter(child => !child || !child.permission || child.permission.includes(req.params.idRole) || child.permission.includes('ALL'))
            return x;
        });
    res.json(parameter);
})

module.exports = app