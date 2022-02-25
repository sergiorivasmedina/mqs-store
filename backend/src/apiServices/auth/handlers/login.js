const express = require("express")
const app = express()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const User = require('../../users/user.model')

app.post("/login", async (req, res) => {
    // se obtiene el email y pass del request
    // se valida con la bd
    // si es valido se genera y devuelve jwt

    const { email, password } = req.body
    if (email == null || email == '' || password == null || password == '') {
        return res.status(400).send('Cannot find user')
    }

    const user = await User.findOne({ mail: email, status: 1 })

    if (user == null || user.length == 0) {
        return res.status(404).send('E-mail doesn\'t exist')
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            const userDto = {
                id: user.id,
                email: user.mail,
                name: user.name,
                lastName: user.lastName,
                role: user.idRole,
                availableBrands: user.availableBrands
            }
            jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '10h' }, (err, accessToken) => {
                res.json({ accessToken, user: userDto })
            })
        } else {
            res.status(500).send('email or password invalid')
        }
    } catch {
        res.status(500).send()
    }
})

module.exports = app