const validateCreateTask = (req, res, next) => {
    req.check('task.title', "Write a title").notEmpty()
    req.check("task.incompleteSteps", "Add at least one step").isArray({min: 1})

    const errors = req.validationErrors()
    if (errors) {
        const firstErrorMessage = errors[0].msg
        return res.status(400).json({error: firstErrorMessage})
    }

    next()
}

module.exports = { validateCreateTask }