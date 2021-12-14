const express = require("express")
const app = express()

app.get('/component-details/component/:id_component', (req, res) => {
    const { id_component } = req.params;
    console.log(id_component);
    res.json({ "message": id_component });
})

module.exports = app;