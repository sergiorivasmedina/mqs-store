const mongoose = require('mongoose')
const { Schema } = mongoose

const ComponentDetailSchema = new Schema({
    partNumber: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    idComponent: {type: Schema.Types.ObjectId, require: true },
    idBrand: {type: Schema.Types.ObjectId, require: true },
    status: {type: Number, require: true},
    photos: [{ type: String }]
}, { versionKey: false })

module.exports = mongoose.model('ComponentDetail', ComponentDetailSchema)