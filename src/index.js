import express from 'express'
import chalk from "chalk";


const PORT = process.env.PORT || 5000
const app = express()


// LISTENING
console.clear()
app.listen(PORT, () => {
    console.group()
    console.log(chalk.greenBright(`================================`))
    console.log(chalk.greenBright(`== SERVER STARTED ON PORT ${PORT} == `))
    console.log(chalk.greenBright(`================================`))
    console.groupEnd()
})

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`)
})
