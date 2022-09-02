import express from 'express'
import chalk from "chalk";
import router from "./router.js";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 5050
const _URL = process.env.MONGO_URL || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.clujbpt.mongodb.net/simple_notes?retryWrites=true&w=majority`

// let corsOptions = {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }
const app = express()
app.use(express.json())
app.use(cors())

async function startApp() {
    try {
        await mongoose.connect(_URL)
        console.clear()
        app.listen(PORT, () => {
            console.group()
            console.log(chalk.greenBright(`================================`))
            console.log(chalk.greenBright(`== SERVER STARTED ON PORT ${PORT} == `))
            console.log(chalk.greenBright(`================================`))
            console.groupEnd()
        })
    } catch (e) {
        console.log(e.message)
    }
}

// LISTENING

app.get('/', cors(), router)
app.get('/test', cors(), router)

app.get('/notes', cors(), router)
app.get('/notes/:id', cors(), router)
app.post('/notes', cors(), router)
app.put('/notes/:id', cors(), router)
app.delete('/notes/:id', cors(), router)

app.get('/user', cors(), router)
app.put('/user', cors(), router)
app.put('/user/changePassword', cors(), router)
// app.delete('/user', cors(), router)

app.use('/auth', router)

startApp()