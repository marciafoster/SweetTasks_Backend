// checkName, checkDescription, checkAssignedTo, checkDueDate, checkBoolean, checkPriority, checkNotes

const checkName = (req, res, next) => {
    if(req.body.task_name){
        return next()
    } else {
        res.status(400).json({ error: "Task name is required" })
    }
}

const checkDescription = (req, res, next) => {
    if(req.body.description){
        return next()
    } else {
        res.status(400).json({ error: "Description is required"})
    }
}

const checkAssignedTo = (req, res, next) => {
    if(req.body.assigned_to){
        return next()
    } else {
        res.status(400).json({ error: "Task must be assigned"})
    }
}

const checkDueDate = (req, res, next) => {
    if(req.body.due_date){
        return next()
    } else {
        res.status(400).json({error: "Due date is required"})
    }
}

const checkBoolean = (req, res, next) => {
    const complete = req.body.is_complete
    if(typeof complete === 'boolean'){
        next()
    } else {
        res.status(400).json({error: "is_complete must be type of boolean"})
    }
}

const checkPriority = (req, res, next) => {
    if(req.body.priority){
        return next()
    } else {
        res.status(400).json({error: "Priority number is required"})
    }
}

const checkNotes = (req, res, next) => {
    if(req.body.notes){
        return next()
    } else {
        res.status(400).json({ error: "Notes is required"})
    }
}











module.exports = { checkName,
                   checkDescription,
                   checkAssignedTo,
                   checkDueDate,
                   checkBoolean,
                   checkPriority,
                   checkNotes }