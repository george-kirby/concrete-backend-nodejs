const Task = require('../models/task')
const { taskSelector } = require('../helpers/selectors')

const getTasksIndex = (request, response) => {
    Task.find()
        .select(taskSelector)
        .then(tasks => {
            response.json({ tasks })
    })
        .catch(error => console.log(error))
}

const getTask = (request, response) => {
    const task = Task.findById(request.params.id)
        .select(taskSelector)
        .then(task => {
            response.json({ task })
    })
        .catch(error => console.log(error))
}

const createTask = (request, response) => {
    const task = new Task(request.body.task)
    task.save((error, result) => {
        if (error) { return response.status(400).json({error}) }
        response.json(result)
    })
}

const patchTask = (request, response) => {
    console.log("PatchTask is running")
    console.log('request.body')
    console.log(request.body)
    const task = Task.findByIdAndUpdate(request.params.id, request.body.task, { new: true },
        (error, result) => {
            if (error) {
                console.log('error')
                console.log(error)
                response.json(error)
            } else {
                console.log(result)
                response.json(result)
            }
    })
}

module.exports = {
    getTasksIndex,
    getTask,
    createTask,
    patchTask
}