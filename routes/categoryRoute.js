const router = require('express').Router();
const categoryController = require("../controllers/categoryController");
const categoryValidator = require("../middleware/categoryValidation");

// Get all categories
router.get("/", categoryController.getAllCategories);

// Get one category by object ID
router.get("/:id", categoryController.getCategoryById);

// Create category
router.post(
    "/",
    categoryValidator.categoryDataValidationRules(),
    categoryValidator.checkCategoryData,
    categoryController.createCategory
);

// Update category by object ID
router.put(
    "/:id",
    categoryValidator.categoryDataValidationRules(),
    categoryValidator.checkCategoryData,
    categoryController.updateCategory
);

// Delete category by object ID
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
