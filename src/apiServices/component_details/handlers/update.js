const express = require("express")
const app = express()

app.put('/component-details/:id_detail', (req, res) => {
    const { id_detail } = req.params;
    console.log(id_detail);
    res.json({ "message": id_detail });
})

module.exports = app;