const validateCreateTask = (req, res, next) => {
    req.check("title", "Write a title").notEmpty()
    req.check("steps", "Add at least one step").isArray({min: 1})

    const errors = req.validationErrors()
    if (errors) {
        const firstErrorMessage = errors[0].msg
        return res.status(400).json({error: firstErrorMessage})
    }

    next()
}

module.exports = { validateCreateTask }