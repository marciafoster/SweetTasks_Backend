const express = require('express')
const tasks = express.Router()
const {getAllTasks, getOneTask, createTask, deleteTask} = require("../queries/task.js")


tasks.get("/", async (req, res) => {
    const allTasks = await getAllTasks()
    if(allTasks[0]) {
        res.status(200).json(allTasks)
    } else {
        res.status(500).json({error: "No data found"})
    }
})

tasks.get("/:id", async (req, res) => {
    const id = req.params.id
    const oneTask = await getOneTask(id)
    if(oneTask){
    res.status(200).json(oneTask)
    } else {
        res.status(500).json({error: "Task Not found"})
    }
})

tasks.post ('/',  async (req, res) => {
    const body = req.body
    const task = await createTask(body)
    res.status(200).json(task)
})

tasks.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedTask = await deleteTask(id)
    if(deletedTask.id){
        res.status(200).json(deletedTask)
    } else {
        res.status(404).json({error: "Task Not Found"})
    }
})



module.exports = tasks

// checkName, checkDescription, checkAssignedTo, checkDueDate, checkBoolean, checkPriority,