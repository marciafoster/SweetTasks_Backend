const express = require('express')
const app = express()
const tasksController = require('./controllers/tasksController')

const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use("/tasks", tasksController)

app.get('/', (req, res) => {
    res.send('Welcome to SweetTasks App!')
})

module.exports = app