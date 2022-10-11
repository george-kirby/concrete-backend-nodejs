const getTasks = (req, res) => {
    res.send("you GET someee /tasks!")
}

const postTasks = (req, res) => {
    res.send("you did it!")
}

module.exports = {
    getTasks,
    postTasks
}