const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: "userId is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    cue: {
        type: String,
        required: "Cue is required"
    },
    actualTime: {
        type: String
    },
    displayTime: {
        type: String
    },
    incompleteSteps: {
        type: Array
    },
    completeSteps: {
        type: Array
    },
    tags: {
        type: Array
    },
})

module.exports = mongoose.model("Task", taskSchema)