
class Controller {
    async home(req, res) {
        res.write(`<h1>WELCOME to SERVER!</h1>`)
        res.end()
    }

    async getTest(req, res) {
        try {
            const client = await pool.connect();
            const result = await client.query(
                `
                SELECT * FROM test
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

    async createNote(req, res) {
        try {
            const targetId = req.params.id
            const client = await pool.connect();
            const result = await client.query(
                `
                INSERT INTO notes 
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

}

export default new Controller();