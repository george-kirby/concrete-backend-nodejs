const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
    // tasks?
})

module.exports = mongoose.model("User", userSchema)