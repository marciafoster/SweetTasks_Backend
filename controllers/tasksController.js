const express = require('express')
const tasks = express.Router()
const {getAllTasks} = require("../queries/task.js")


tasks.get("/", async (req, res) => {
    const allTasks = await getAllTasks()
    if(allTasks[0]) {
        res.status(200).json(allTasks)
    } else {
        res.status(500).json({error: "No data found"})
    }
})



module.exports = tasks