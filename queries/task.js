const db = require('../db/dbConfig')

const getAllTasks = async () => {
    try {
        const allTasks = await db.any("SELECT * FROM tasks")
        return allTasks
    } catch (error) {
        return error 
    }

}

const getOneTask = async (id) => {
    try {
        const oneTask = await db.one("SELECT * FROM tasks WHERE id=$1", id)
        return oneTask
    } catch (error) {
        return error
    }
}

const createTask = async (task) => {
    try {
        const newTask = await db.one("INSERT INTO tasks (task_name, description, assigned_to, due_date, is_complete, priority, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [task.task_name, task.description, task.assigned_to, task.due_date, task.is_complete, task.priority, task.notes ]
        )
        return newTask
        
    } catch (error) {
        return error
    }
}

const deleteTask = async (id) => {
    try {
        const deletedTask = await db.one("DELETE FROM tasks WHERE id=$1 RETURNING *", id)
        return deletedTask
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask, 
    deleteTask
}