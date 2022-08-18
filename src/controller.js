import {pool} from "./index.js";

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

}

export default new Controller();