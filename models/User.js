import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, minLength: 5},
    country: {type: String},
    userpassword: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now(), immutable: true},
    updatedAt: {type: Date, default: () => Date.now(), immutable: true},
    posts: {}
})

module.exports = mongoose.model('User', UserSchema)