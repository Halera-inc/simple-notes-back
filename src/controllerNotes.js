import Note from '../models/Note.js'

class ControllerNotes {

    async getAllNotes(req, res) {
        try {
            const notes = await Note.find()
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
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }

    async createNote(req, res) {
        try {
            let newTitle = req.body.title
            console.log(newTitle)
            // let noteText = req.query.text
            // const client = await pool.connect();
            // const result = await client.query(
            //     `
            //     INSERT INTO notes (title, noteText, color, noteMode) VALUES ('${newTitle}', '${noteText}', 'default', 'NoteText');
            //     `);
            // const results = {'results': (result) ? result.rows : null};

            const newNote = await Note.create({title: newTitle})
            res.send(newNote)
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }

    async updateNote(req, res) {
        try {
            const client = await pool.connect();
            const result = await client.query(
                `
                UPDATE notes SET 
                    title='${req.query.title}',
                    noteText='${req.query.text}',
                    color='${req.query.color}'
                    WHERE id=${req.params.id};
                `);
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }

    async deleteNote(req, res) {
        try {

            const targetId = req.params.id
            console.log(targetId)
            const client = await pool.connect();
            const result = await client.query(
                `DELETE FROM notes WHERE id=${targetId};`);
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }


}

export default new ControllerNotes();