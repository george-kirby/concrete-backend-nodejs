const User = require('../models/user')

const processLoginAttempt = async (request, response) => { 
    const { email, password } = request.body.user
    const configuredRequestBody = { email, password }
    console.log("SUBMITTED USER DETAILS:", configuredRequestBody)
    console.log("REQUEST BODY:", request.body)
    // console.log("CONFIGURED REQUEST BODY:", configuredRequestBody)

    // check with database
    // returns user object { email: ..., password: ...} if credentials correct
    // or empty array if credentials incorrect
    const databaseCheck = await User.find(configuredRequestBody)
    console.log(databaseCheck)
    if (databaseCheck.length > 0) {
        response.json(databaseCheck)
    } else {
        response.json({ errors: ["Login credentials failed. Please try again."] })
    }

    // ERROR HANDLING

}

module.exports = {
    processLoginAttempt
}