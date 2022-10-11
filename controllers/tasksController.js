const Task = require('../models/task')

const getTasks = (req, res) => {
    const tasks = Task.find()
        .then(tasks => {
            res.json({ tasks })
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
    getTasks,
    createTask
}