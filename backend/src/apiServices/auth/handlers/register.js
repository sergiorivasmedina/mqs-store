const express = require("express")
const app = express()
const bcrypt = require('bcrypt')

const User = require('../../users/user.model')

function validateField(param) {
    return param == null || param == ''
}

app.post('/register', async (req, res) => {
    const { name, email, password, ruc } = req.body

    if (validateField(name) || validateField(email) || validateField(password)) {
        return res.status(400).send('Fill all the mandatory fields')
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ name: name, 
            mail: email, 
            password: hashedPassword, 
            ruc: ruc, 
            status: 1 })
        await user.save()
        res.status(201).json({ name, mail: email, ruc })
      } catch {
        res.status(500).send()
      }
})

module.exports = app;