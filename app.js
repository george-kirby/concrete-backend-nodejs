const express = require('express')
const app = express()

const cors = require('cors');
const morgan = require('morgan')

const { postTasks } = require('./routes/post')

app.use(morgan("dev"))

app.use(cors({
  origin: "http://localhost:3000"
}))

app.post("/tasks", postTasks)

const port = 8080
app.listen(port, () => {
  console.log(`NodeJS API is listening on port ${port}`)
})