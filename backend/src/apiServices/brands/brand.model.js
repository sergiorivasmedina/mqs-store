const mongoose = require('mongoose')
const { Schema } = mongoose

const BranSchema = new Schema({
    description: { type: String, require: true },
    status: { type: Number, require: true },
    photos: [{ type: String }]
}, { versionKey: false })

module.exports = mongoose.model('Brand', BranSchema)