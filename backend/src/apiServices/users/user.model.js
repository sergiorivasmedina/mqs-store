const mongoose = require('mongoose')
const { Schema } = mongoose
const BrandSchema = require('../brands/brand.model').schema

const UserSchema = new Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: false },
    mail: { type: String, require: true },
    password: { type: String, require: true },
    cellphone: { type: String, require: false },
    companyName: { type: String, require: false },
    ruc: { type: String, require: false },
    status: { type: Number, require: true },
    idRole: {type: Schema.Types.ObjectId, require: true },
    availableBrands: [BrandSchema]
}, { versionKey: false })

module.exports = mongoose.model('User', UserSchema)