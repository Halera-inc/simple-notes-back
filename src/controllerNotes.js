import {pool} from "./index.js";

class ControllerNotes {

    async getAllNotes(req, res) {
        try {
            const client = await pool.connect();
            const result = await client.query(
                `
                SELECT * FROM notes;
                `);
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }

    async getTargetNote(req, res) {
        try {
            const targetId = req.params.id
            const client = await pool.connect();
            const result = await client.query(
                `
                SELECT * FROM notes WHERE id=${targetId};
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

    async createNote(req, res) {
        try {
            let newTitle = req.query.title
            let noteText = req.query.text
            const client = await pool.connect();
            const result = await client.query(
                `
                INSERT INTO notes (title, noteText, color, noteMode) VALUES ('${newTitle}', '${noteText}', 'default', 'NoteText');
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