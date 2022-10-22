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
    console.log(request.body)
    // find task using task._id === request.params.id
    const task = Task.findByIdAndUpdate(request.params.id, request.body, 
        (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log("updated task:" + result)
            }
    })
    // update with new data - request.body
    // save
    // return saved task (or error) to frontend
    response.json("patchTask was reached")
}

module.exports = {
    getTasksIndex,
    getTask,
    createTask,
    patchTask
}