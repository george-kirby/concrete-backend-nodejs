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
const userRoutes = require('./routes/users')
const taskRoutes = require('./routes/tasks')
const loginRoutes = require('./routes/login')

// middleware
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(expressValidator())
// app.use(function to check if request has valid authorisation header)
// If good, set global variable currentUser
// Else, return ?401 with error message
app.use((request, response, next) => {
  const authHeader = request.headers["Authorization"] || request.headers["Authorisation"] || request.headers["authorization"] || request.headers["authorisation"]
  authHeader === "letMeIn" ?
    next() :
    response.status(401).json("Unauthorized")
})

const origin = "http://localhost:3000"
const corsOptions = {
  origin,
  optionsSuccessStatus: 200
}

app.options(origin, cors(corsOptions))

// routes
app.use("/tasks", taskRoutes)
app.use("/users", userRoutes)
app.use("/login", loginRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`NodeJS API is listening on port ${port}`)
})