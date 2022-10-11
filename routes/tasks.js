const express = require('express')
const { getTasks, createTask } = require("../controllers/tasksController")
const { validateCreateTask } = require('../helpers/validators')

const router = express.Router()

router.get("/", getTasks)
router.post("/", validateCreateTask, createTask)

module.exports = router