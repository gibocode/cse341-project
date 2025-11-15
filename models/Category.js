const database = require("../database");

class Category {

    // Category model constructor
    constructor() {
        this.collection = database.getDatabase().db().collection("categories");
    }

    // Get all categories
    async getAll() {
        return await this.collection.find().toArray();
    }

    // Get category by object ID
    async getByObjectId(objectId) {
        return await this.collection.findOne({ _id: objectId });
    }

    // Create category
    async create(categoryData) {
        return await this.collection.insertOne(categoryData);
    }

    // Update category
    async update(objectId, categoryData) {
        return await this.collection.replaceOne({ _id: objectId }, categoryData);
    }

    // Deleet category
    async delete(objectId) {
        return await this.collection.deleteOne({ _id: objectId });
    }
}

module.exports = Category;
