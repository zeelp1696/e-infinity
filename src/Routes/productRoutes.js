const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Error getting products:", error);
        res.status(500).json({ error: 'Failed to get products' });
    }
});

module.exports = router;