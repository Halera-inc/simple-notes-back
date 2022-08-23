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

    async getTargetUser(req, res) {
        try {
            const client = await pool.connect();
            const userId = req.params.id
            const result = await client.query(`SELECT * FROM users WHERE id = ${userId}`);
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }

    async createUser(req, res) {
        try {
            const client = await pool.connect();

            const username = req.query.username
            const email = req.query.email
            const country = req.query.country
            const password = req.query.password

            const result = await client.query(
                `
                INSERT INTO users (username, email, country, userpassword)
                VALUES ('${username}', '${email}', '${country}', '${password}');
                `
            );
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }


    async updateTargetUser(req, res) {
        try {
            const client = await pool.connect();
            const userId = req.params.id
            const username = req.query.username
            const email = req.query.email
            const country = req.query.country
            const result = await client.query(
                `
                UPDATE users
                SET username = '${username}', email = '${email}', country = '${country}'
                WHERE id = ${userId};
                `
            );
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }


    async updateUserPassword(req, res) {
        try {
            const client = await pool.connect();
            const userId = req.params.id
            const oldPassword = req.query.oldPassword
            const newPassword = req.query.newPassword
            const oldPasswordRequest = await client.query(
                `SELECT userpassword FROM users WHERE id = '${userId}'`
            )
            console.log(oldPasswordRequest.rows[0].userpassword)
            if (oldPasswordRequest.rows[0].userpassword === oldPassword) {
                const result = await client.query(
                    `
                UPDATE users
                SET userpassword = '${newPassword}'
                WHERE id = ${userId};
                `);

                const results = {'results': (result) ? result.rows : null};
                res.send(results)
                client.release();
            } else {
                res.send({
                    message: 'Incorrect old password!'
                })
            }
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }

    async deleteTargetUser(req, res) {
        try {
            const client = await pool.connect();
            const userId = req.params.id
            const result = await client.query(`DELETE FROM users WHERE id = ${userId};`);
            const results = {'results': (result) ? result.rows : null};
            res.send(results)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }

    async getUserNotes(req, res) {
        try {
            const client = await pool.connect();
            const userId = req.params.id
            const result = await client.query(
                `
                    SELECT notes.id, notes.title, notes.notetext, notes.color, notes.notemode, notes.dateofcreated FROM users, notes
                    WHERE users.id = notes.userid AND users.id = ${userId}
                    ORDER BY notes.id ASC;
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

export default new ControllerUsers();