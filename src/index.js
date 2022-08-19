import * as dotenv from 'dotenv';
import express from 'express'
import chalk from "chalk";
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import Pool from 'pg-pool'
import router from "./router.js";
import cors from "cors";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const _URL = 'postgres://sdoliyadjjbcsp:6cfa03e3ef5f5a240d58f8adfab0e10b3a1b22c7b866e9ee567814698ef3583d@ec2-54-155-110-181.eu-west-1.compute.amazonaws.com:5432/d601tpm4h1m5m4'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const pool = new Pool({
    connectionString: _URL, ssl: {
        rejectUnauthorized: false
    }
});

// LISTENING
console.clear()
console.log(process.env.PORT)
console.log(process.env.TEST)
app.listen(PORT, () => {
    console.group()
    console.log(chalk.greenBright(`================================`))
    console.log(chalk.greenBright(`== SERVER STARTED ON PORT ${PORT} == `))
    console.log(chalk.greenBright(`================================`))
    console.groupEnd()
})

app.get('/', router)
app.get('/test', router)
app.get('/notes', router)
app.get('/notes/:id', router)