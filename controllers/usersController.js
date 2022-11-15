const User = require('../models/user')

const getUsersIndex = (req, res) => {
    User.find()
        .then(users => {
            res.json({ users })
    })
        .catch(err => console.log(err))
}

const createUser = (request, response) => { 
    const { email, password } = request.body.user
    const configuredRequestBody = { email, password }
    const user = new User(configuredRequestBody)
    console.log("CREATING USER:", user)
    user.save((error, result) => {
        if (error) {
            response.status(400).json({ error })
        } else {
            // TODO don't sent password (unless encrypted?)
            response.json({ newUser: result })
        }
    })
}

module.exports = {
    getUsersIndex,
    createUser
}