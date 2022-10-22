const express = require('express')
const { getTasksIndex, getTask, createTask, patchTask } = require("../controllers/tasksController")
const { validateCreateTask } = require('../helpers/validators')

const router = express.Router()

router.get("/", getTasksIndex)
router.get("/:id", getTask)
router.post("/", validateCreateTask, createTask)
router.patch("/:id", patchTask)

module.exports = router