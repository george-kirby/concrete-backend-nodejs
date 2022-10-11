const Task = require('../models/task')

const getTasks = (req, res) => {
    res.send("you GET someee /tasks!")
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
        res.status(200).json({
            post: result
        })
    })
}

module.exports = {
    getTasks,
    createTask
}