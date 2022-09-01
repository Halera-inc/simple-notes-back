import Test from "../models/Test.js";

class TestController {
    async home(req, res) {
        res.write(`<h1>WELCOME to SERVER!</h1>`)
        res.end()
    }

    async getTest(req, res) {
        try {
            const result = await Test.find()
            console.log()
            res.json(result[0].test)
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("Error " + err);
        }
    }
}

export default new TestController();