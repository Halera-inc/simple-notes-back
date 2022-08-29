import mongoose from "mongoose";

const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: {type: String, required: true},
    notetext: {type: String},
    color: {type: String},
    notemode: {type: String},
    createdAt: {type: Date, default: () => Date.now(), immutable: true},
    userid: {type: mongoose.SchemaTypes.ObjectId}
})

module.exports = mongoose.model('Note', NoteSchema)