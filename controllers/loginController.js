const User = require('../models/user')

const processLoginAttempt = async (request, response) => { 
    const { email, password } = request.body.user
    const configuredRequestBody = { email, password }
    console.log("SUBMITTED USER DETAILS:", configuredRequestBody)
    console.log("REQUEST BODY:", request.body)
    // console.log("CONFIGURED REQUEST BODY:", configuredRequestBody)
    const databaseCheck = await User.find(configuredRequestBody)
    console.log(databaseCheck)
    response.json(databaseCheck)

    // ERROR HANDLING

}

module.exports = {
    processLoginAttempt
}