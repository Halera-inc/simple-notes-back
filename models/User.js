import mongoose from "mongoose";
import Note from "./Note.js";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, required: true},
    token: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, minLength: 5, trim: true, unique: true},
    country: {type: String},
    userpassword: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: () => Date.now(), immutable: true},
    updatedAt: {type: Date, default: () => Date.now()},
    settings: {
        darkmode: {type: Boolean},
        themecolor: {
            type: String,
            enum: [
                'default,', 'dark', 'green', 'blue', 'mustard', 'violet'
            ]
        }
    },
    // notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
})

export default mongoose.model('User', UserSchema)