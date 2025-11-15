const { body, validationResult } = require("express-validator")
const validate = {}

validate.categoryDataValidationRules = () => {
    return [
        body("categoryId")
            .trim()
            .notEmpty().withMessage("Category ID is required."),
        body("categoryName")
            .trim()
            .notEmpty().withMessage("Category name is required."),
        body("categoryDescription")
            .trim()
            .notEmpty().withMessage("Category description is required.")
    ]
};

validate.checkCategoryData = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next();
};

module.exports = validate
