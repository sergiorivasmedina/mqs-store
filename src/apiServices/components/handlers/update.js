const express = require("express")
const app = express()

app.put('/component/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    res.json({ message: "update component # " + id + "!" })
})

module.exports = app;