const express = require('express')
const { getTasksIndex, getTask, createTask, patchTask, deleteTask } = require("../controllers/tasksController")
const { validateCreateTask } = require('../helpers/validators')

const router = express.Router()

router.get("/", getTasksIndex)
router.get("/:id", getTask)
router.post("/", validateCreateTask, createTask)
router.patch("/:id", patchTask)
router.delete("/:id", deleteTask)

module.exports = router