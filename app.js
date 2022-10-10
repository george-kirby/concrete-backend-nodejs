const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors({
  origin: "http://localhost:3001"
}))

app.get('/tasks', (req, res) => {
  res.send("you GET someee /tasks!")
})

app.post('/tasks', (req, res) => {
  res.send("you did it!")
})

app.listen(3000)