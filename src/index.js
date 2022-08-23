import express from 'express'
import chalk from "chalk";
import Pool from 'pg-pool'
import router from "./router.js";
import cors from "cors";

const app = express()
const PORT = process.env.PORT || 5000
const _URL = 'postgres://sdoliyadjjbcsp:6cfa03e3ef5f5a240d58f8adfab0e10b3a1b22c7b866e9ee567814698ef3583d@ec2-54-155-110-181.eu-west-1.compute.amazonaws.com:5432/d601tpm4h1m5m4'

export const pool = new Pool({
    connectionString: _URL, ssl: {
        rejectUnauthorized: false
    }
});

let corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

// LISTENING
console.clear()
app.use(cors(corsOptions))
app.listen(PORT, () => {
    console.group()
    console.log(chalk.greenBright(`================================`))
    console.log(chalk.greenBright(`== SERVER STARTED ON PORT ${PORT} == `))
    console.log(chalk.greenBright(`================================`))
    console.groupEnd()
})

app.get('/', cors(), router)
app.get('/test', cors(), router)

app.get('/notes', cors(), router)
app.get('/notes/:id', cors(), router)
app.post('/notes', cors(), router)
app.put('/notes/:id', cors(), router)
app.delete('/notes/:id', cors(), router)

app.get('/users', cors(), router)
app.get('/users/:id', cors(), router)
app.post('/users', cors(), router)
app.put('/users/:id', cors(), router)
app.put('/users/:id/changePassword', cors(), router)
app.delete('/users/:id', cors(), router)

app.get('/users/:id/notes', cors(), router)