const express = require("express")
const app = express()

const User = require('../user.model')

app.get("/brand/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
})

module.exports = app