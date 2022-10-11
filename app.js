const express = require('express')
const app = express()

const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI)
.catch(err => console.log(`error at initial DB connection: ${err.message}`))
.then(() => console.log('DB connected'))

mongoose.connection.on('error', err => {
  console.log(`error after initial DB connection: ${err.message}`)
})

// bring in routes
const taskRoutes = require('./routes/tasks')

// middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cors({
  origin: "http://localhost:3000"
}))

// routes
app.use("/tasks", taskRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`NodeJS API is listening on port ${port}`)
})