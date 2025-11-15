const Category = require("../models/Category");
const ObjectId = require("mongodb").ObjectId;

const getAllCategories = async (req, res) => {
    // #swagger.tags = ['Categories']
    try {
        const category = new Category();
        const result = await category.getAll();
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Could not retrieve categories." });
    }
};

const getCategoryById = async (req, res) => {
    // #swagger.tags = ['Categories']
    try {
        const id = req.params.id
        if (ObjectId.isValid(id) === false) {
            return res.status(400).json({ message: "Invalid category ID." });
        }
        const objectId = new ObjectId(id);
        const category = new Category();
        const result = await category.getByObjectId(objectId);
        if (!result) {
            return res.status(404).json({ message: "Category not found." });
        }
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Could not retrieve category." });
    }
};

const createCategory = async (req, res) => {
    // #swagger.tags = ['Categories']
    try {
        const data = req.body;
        const categoryData = {
            categoryId: data.categoryId,
            categoryName: data.categoryName,
            categoryDescription: data.categoryDescription
        };
        const category = new Category();
        const result = await category.create(categoryData);
        if (result.insertedId) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || "Could not create category.");
        }
    } catch (error) {
        return res.status(500).json({ message: "Could not create category." });
    }
};

const updateCategory = async (req, res) => {
    // #swagger.tags = ['Categories']
    try {
        const id = req.params.id
        if (ObjectId.isValid(id) === false) {
            return res.status(400).json({ message: "Invalid category ID." });
        }
        const objectId = new ObjectId(id);
        const data = req.body;
        const categoryData = {
            categoryId: data.categoryId,
            categoryName: data.categoryName,
            categoryDescription: data.categoryDescription
        };
        const category = new Category();
        const result = await category.update(objectId, categoryData);
        if (result.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || "Could not update category.")
        }
    } catch (error) {
        return res.status(500).json({ message: "Could not update category." });
    }
};

const deleteCategory = async (req, res) => {
    // #swagger.tags = ['Categories']
    try {
        const id = req.params.id
        if (ObjectId.isValid(id) === false) {
            return res.status(400).json({ message: "Invalid category ID." });
        }
        const objectId = new ObjectId(id);
        const category = new Category();
        const result = await category.delete(objectId);
        if (result.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || 'Could not delete category.');
        }
    } catch (error) {
        return res.status(500).json({ message: "Could not delete category." });
    }
};

module.exports = { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
