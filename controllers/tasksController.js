const express = require('express')
const tasks = express.Router()


tasks.get("/", (req, res) => {
    res.json({status: "good"})
})


module.exports = tasks