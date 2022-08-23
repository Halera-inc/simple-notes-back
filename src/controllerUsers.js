import {pool} from "./index.js";

class ControllerUsers {

    async getAllUsers(req, res) {
        try {
            const client = await pool.connect();
            const result = await client.query(`SELECT * FROM users`);
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

export default new ControllerUsers();