const router = require('express').Router();
const categoryController = require("../controllers/categoryController");

// Get all categories
router.get("/", categoryController.getAllCategories);

// Get one category by object ID
router.get("/:id", categoryController.getCategoryById);

// Create category
router.post("/", categoryController.createCategory);

// Update category by object ID
router.put("/:id", categoryController.updateCategory);

// Delete category by object ID
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
