const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email is required",
        // custom validator to ensure uniqueness
        validate: {
            validator: async function(email) {
              const user = await this.constructor.findOne({ email });
              return !user
            },
            message: 'That email address is taken!'
          },
    },
    password: {
        type: String,
        required: "Password is required"
    },
    // tasks?
})

module.exports = mongoose.model("User", userSchema)