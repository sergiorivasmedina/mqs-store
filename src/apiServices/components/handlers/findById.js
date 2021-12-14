const express = require("express")
const app = express()

app.get('/component/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    res.json({ message: "Get component # " + id + "!" })
})

module.exports = app;