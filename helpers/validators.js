const validateCreateTask = (req, res, next) => {
    console.log("req.body")
    console.log(req.body)
    req.check('task.title', "Write a title").notEmpty()
    req.check("task.incomplete_steps", "Add at least one step").isArray({min: 1})

    const errors = req.validationErrors()
    if (errors) {
        const firstErrorMessage = errors[0].msg
        return res.status(400).json({error: firstErrorMessage})
    }

    next()
}

module.exports = { validateCreateTask }