const express = require('express')
const app = express()

app.post('/tasks', (req, res) => {
  res.send("you did it!")
})

app.listen(3000)