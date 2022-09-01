import Note from '../models/Note.js'

class NotesController {

    async getAllNotes(req, res) {
        try {
            const notes = await Note.find({user: req.user.id})
            res.send(notes)
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }

    async getTargetNote(req, res) {
        try {
            const targetId = req.params.id
            const selectedNote = await Note.findById(targetId);
            res.send(selectedNote)
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }

    async createNote(req, res) {
        try {
            const {title, note_text, color, note_mode} = req.body
            const user_id = req.user.id
            const newNote = await Note.create({
                title,
                note_text,
                color,
                note_mode,
                user: user_id
            })
            res.send(newNote)
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }

    async updateNote(req, res) {
        try {
            const {title, note_text, color, note_mode} = req.body
            const targetId = req.params.id
            await Note.findByIdAndUpdate(targetId, {
                $set: {
                    title,
                    note_text,
                    color,
                    note_mode
                }
            }, {runValidators: true})
            const updatedNote = await Note.findById(targetId)
            res.send(updatedNote)
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }

    async deleteNote(req, res) {
        try {
            const targetId = req.params.id
            const verifyNote = await Note.findById(targetId)
            if (!verifyNote) return res.status(400).json({message: "There is no requested Note with this id"})
            await Note.findByIdAndDelete(targetId)
            res.json({message: "Note has been successfully deleted"})
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }


}

export default new NotesController();