const express = require('express')
const { getTasksIndex, getTask, createTask } = require("../controllers/tasksController")
const { validateCreateTask } = require('../helpers/validators')

const router = express.Router()

router.get("/", getTasksIndex)
router.get("/:id", getTask)
router.post("/", validateCreateTask, createTask)

module.exports = router