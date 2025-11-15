const router = require("express").Router();
const productController = require("../controllers/productController");

// Get all products
router.get("/", productController.getAllProducts);

// Get one product by object ID
router.get("/:id", productController.getProductById);

// Create product
router.post("/", productController.createProduct);

// Update product by object ID
router.put("/:id", productController.updateProduct);

// Delete product by object ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;
