const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String}
});

// Prevent overwriting the model if it already exists
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
