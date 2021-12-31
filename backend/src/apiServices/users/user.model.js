const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: { type: String, require: true },
    mail: { type: String, require: true },
    password: { type: String, require: true },
    ruc: { type: String, require: false },
    status: { type: Number, require: true },
    idRole: {type: Schema.Types.ObjectId, require: true },
    availableBrands: [{ type: Schema.Types.ObjectId }]
}, { versionKey: false })

module.exports = mongoose.model('User', UserSchema)