const User = require('../models/user')

const getUsersIndex = (req, res) => {
    User.find()
        .then(users => {
            res.json({ users })
    })
        .catch(err => console.log(err))
}

const createUser = (req, res) => { 
    const { email, password } = req.body.user
    const configuredReqBody = { email, password }
    const user = new User(configuredReqBody)
    console.log("CREATING USER:", user)
    console.log("REQ BODY:", req.body)
    console.log("CONFIGURED REQ BODY:", configuredReqBody)
    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            newUser: result
        })
    })
}

module.exports = {
    getUsersIndex,
    createUser
}