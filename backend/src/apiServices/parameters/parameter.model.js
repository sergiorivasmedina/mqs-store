const mongoose = require('mongoose')
const { Schema } = mongoose

const ParameterSchema = new Schema({
    group: { type: String, require: true },
    value: { type: Object }
}, { versionKey: false })

module.exports = mongoose.model('Parameter', ParameterSchema)