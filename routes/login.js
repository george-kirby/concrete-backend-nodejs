const express = require('express')
const { processLoginAttempt } = require("../controllers/loginController")

const router = express.Router()

router.post("/", processLoginAttempt)

module.exports = router