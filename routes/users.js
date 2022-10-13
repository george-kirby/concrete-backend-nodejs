const express = require('express')
const { createUser } = require("../controllers/usersController")
// const { validateCreateUser } = require('../helpers/validators')

const router = express.Router()

// router.get("/", getTasksIndex)
// router.get("/:id", getTask)
// router.post("/", validateCreateUser, createUser)
router.post("/", createUser)

module.exports = router