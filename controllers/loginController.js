const User = require('../models/user')
const Task = require('../models/task')
const { taskSelector } = require('../helpers/selectors')

const processLoginAttempt = async (request, response) => { 
    const { email, password } = request.body.user
    const configuredRequestBody = { email, password }

    // check with database
    // returns user object including tasks { email: "", password: "", tasks: []} if credentials correct
    // or empty array if credentials incorrect
    const matchingUsers = await User.find(configuredRequestBody)
    if (matchingUsers.length > 0) {
        const user = matchingUsers[0]
        const userCoreInfo = JSON.parse(JSON.stringify(user))
        const tasks = await getUserTasks(userCoreInfo._id)
        // TODO don't sent password (unless encrypted?)
        response.json({...userCoreInfo, tasks})
    } else {
        response.json({ errors: ["Login credentials failed. Please try again."] })
    }

    // TODO error handling

}

const getUserTasks = async (userId) => {
    const tasks = await Task.find({ userId }).select(taskSelector)
    return tasks
}

module.exports = {
    processLoginAttempt
}