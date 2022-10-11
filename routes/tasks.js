const express = require('express')
const { getTasks, postTasks } = require("../controllers/tasksController")

const router = express.Router()

router.get("/", getTasks)
router.post("/", postTasks)

module.exports = router