const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required"
    },
    cue: {
        type: String
    },
    steps: {
        type: Array
    },
    // displayTime: null,
    // actualTime: null,
    // tags: [],
})

module.exports = mongoose.model("Task", taskSchema)