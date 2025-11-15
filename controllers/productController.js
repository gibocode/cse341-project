const Product = require("../models/Product");
const ObjectId = require("mongodb").ObjectId;

const getAllProducts = async (req, res) => {
    // #swagger.tags = ['Products']
    const product = new Product();
    const result = await product.getAll();
    return res.json(result)
};

const getProductById = async (req, res) => {
    // #swagger.tags = ['Products']
    const objectId = new ObjectId(req.params.id);
    try {
        const product = new Product();
        const result = await product.getByObjectId(objectId);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.json(result);
    }
};

const createProduct = async (req, res) => {
    // #swagger.tags = ['Products']
    const data = req.body;
    const productData = {
        productId: data.productId,
        productName: data.productName,
        productDescription: data.productDescription,
        productColor: data.productColor,
        productBrand: data.productBrand,
        productPrice: data.productPrice,
        productImage: data.productImage
    };
    const product = new Product();
    const result = await product.create(productData);
    if (result.insertedId) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "Could not create product.");
    }
};

const updateProduct = async (req, res) => {
    // #swagger.tags = ['Products']
    const objectId = new ObjectId(req.params.id);
    const data = req.body;
    const productData = {
        productId: data.productId,
        productName: data.productName,
        productDescription: data.productDescription,
        productColor: data.productColor,
        productBrand: data.productBrand,
        productPrice: data.productPrice,
        productImage: data.productImage
    };
    const product = new Product();
    const result = await product.update(objectId, productData);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "Could not update product.")
    }
};

const deleteProduct = async (req, res) => {
    // #swagger.tags = ['Products']
    const objectId = new ObjectId(req.params.id);
    const product = new Product();
    const result = await product.delete(objectId);
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Could not delete product.');
    }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
