import mongoose from "mongoose";
import User from "./User.js";

const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: {type: String},
    note_text: {type: String},
    color: {
        type: String,
        enum: [
            'default,', 'dark', 'green', 'blue', 'mustard', 'violet'
        ],
        default: 'default'
    },
    note_mode: {type: String, enum: ['NoteText', 'NoteTodo']},
    createdAt: {type: Date, default: () => Date.now(), immutable: true},
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
})

export default mongoose.model('Note', NoteSchema)