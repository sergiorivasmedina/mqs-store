const mongoose = require('mongoose')
const { Schema } = mongoose

const ComponentSchema = new Schema({
    description: { type: String, require: true },
    status: { type: Number, require: true }
}, { versionKey: false })

module.exports = mongoose.model('Component', ComponentSchema)