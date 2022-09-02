import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, trim: true},
    // token: {type: String, required: true},
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 5,
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    country: {type: String},
    password: {type: String, required: true, trim: true, minLength: 3},
    createdAt: {type: Date, default: () => Date.now(), immutable: true},
    updatedAt: {type: Date, default: () => Date.now()},
    settings: {
        darkmode: {type: Boolean, default: false},
        themecolor: {
            type: String,
            enum: [
                'default', 'dark', 'green', 'blue', 'mustard', 'violet'
            ],
            default: 'default'
        }
    },
    // notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
})

export default mongoose.model('User', UserSchema)