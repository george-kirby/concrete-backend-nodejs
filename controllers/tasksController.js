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
    const task = new Task(req.body)
    console.log("CREATING TASK:", task)
    console.log("REQ BODY:", req.body)
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