const Task = require('../models/task')
const { taskSelector } = require('../helpers/selectors')

const getTasksIndex = (req, res) => {
    Task.find()
        .select(taskSelector)
        .then(tasks => {
            res.json({ tasks })
    })
        .catch(err => console.log(err))
}

const getTask = (req, res) => {
    const task = Task.findById(req.params.id)
        .select(taskSelector)
        .then(task => {
            res.json({ task })
    })
        .catch(err => console.log(err))
}

const createTask = (request, res) => {
    const task = new Task(request.body.task)
    task.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}

module.exports = {
    getTasksIndex,
    getTask,
    createTask
}