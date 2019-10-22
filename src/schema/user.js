const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    __v: { type: Number, select: false },
    name: { type: String, required: true },
    age: { type: Number, required: true }
})

module.exports = mongoose.model('User', UserSchema)