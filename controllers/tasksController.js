const express = require('express')
const tasks = express.Router()
const { getAllTasks, 
        getOneTask, 
        createTask, 
        deleteTask, 
        updateTask } = require("../queries/task.js")
const { checkName,
        checkDescription,
        checkAssignedTo,
        checkDueDate,
        checkBoolean,
        checkPriority,
        checkNotes } = require("../validations/checkTasks")


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

tasks.post ('/', checkName, checkDescription, checkAssignedTo, checkDueDate, checkBoolean, checkPriority, checkNotes, async (req, res) => {
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
        res.status(500).json({error: "Task Not Found"})
    }
})

tasks.put('/:id', checkName, checkDescription, checkAssignedTo, checkDueDate, checkBoolean, checkPriority, checkNotes, async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updatedTask = await updateTask(id, body)
    if(updatedTask.id){
        res.status(200).json(updatedTask)
    } else {
        res.status(500).json({ error: "Task Not Found" })
    }
})



module.exports = tasks

