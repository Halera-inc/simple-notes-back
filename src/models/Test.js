import mongoose from "mongoose";
const Schema = mongoose.Schema

const TestSchema = new Schema({
    test: String
})

export default mongoose.model('Test', TestSchema)