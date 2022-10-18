const express = require('express')
const { getUsersIndex, createUser } = require("../controllers/usersController")
// const { validateCreateUser } = require('../helpers/validators')

const router = express.Router()

router.get("/", getUsersIndex)
// router.get("/:id", getTask)
// router.post("/", validateCreateUser, createUser)
router.post("/", createUser)

module.exports = router