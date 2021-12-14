const express = require("express")
const app = express()

app.post('/component-details/', (req, res) => {
    res.json({ "message": "Create new component detail" });
})

module.exports = app;