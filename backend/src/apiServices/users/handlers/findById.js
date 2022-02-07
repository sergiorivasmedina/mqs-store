const express = require("express")
const app = express()

const User = require('../user.model')

app.get("/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json({
        _id: user._id,
        name: user.name,
        email: user.mail,
        status: user.status,
        idRole: user.idRole,
        availableBrands: user.availableBrands
    })
})

module.exports = app