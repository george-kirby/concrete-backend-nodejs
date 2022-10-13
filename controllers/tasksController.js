const Task = require('../models/task')

const getTasksIndex = (req, res) => {
    const tasks = Task.find()
        .select("_id title steps")
        .then(tasks => {
            res.json({ tasks })
    })
        .catch(err => console.log(err))
}

const getTask = (req, res) => {
    const task = Task.findById(req.params.id)
        .select("_id title steps")
        .then(task => {
            res.json({ task })
    })
        .catch(err => console.log(err))
}

const createTask = (req, res) => { 
    const configuredReqBody = {
        title: req.body.task.title,
        steps: req.body.task.incomplete_steps
    }
    const task = new Task(configuredReqBody)
    console.log("CREATING TASK:", task)
    console.log("REQ BODY:", req.body)
    console.log("CONFIGURED REQ BODY:", configuredReqBody)
    task.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            post: result
        })
    })
}

module.exports = {
    getTasksIndex,
    getTask,
    createTask
}