const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/product");
// Add product to cart

console.log("✅ Cart routes loaded"); // Add this at the top of cartRoutes.js


router.post("/add", async (req, res) => {
    console.log("🚚 Add to cart route hit"); 
    try {
        console.log("Received request to add product to cart:", req.body);


        const { productId } = req.body;
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        // Fetch product details from MongoDB
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        console.log("Product found:", product); // ✅ Debugging

        // Create or update cart
        let cartItem = await Cart.findOne({ productId });
        if (cartItem) {
            cartItem.quantity += 1; // Increase quantity if product already in cart
        } else {
            cartItem = new Cart({
                productId: product._id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image
            });
        }
        console.log("Product image:", product.image);

        await cartItem.save();
        console.log("Cart updated:", cartItem); // ✅ Debugging
        res.json({ success: true, message: "Product added to cart!" });

    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// **Fetch cart items**
router.get("/", async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    } catch (error) {
        console.error("Error retrieving cart items:", error);
        res.status(500).json({ message: "Failed to retrieve cart items" });
    }
});


const mongoose = require("mongoose");

router.post("/update", async (req, res) => {
    console.log("🛠 Received request to update cart:", req.body);

    try {
        let { productId, change } = req.body;

        if (!productId || change === undefined) {
            console.log("❌ Missing productId or change in request body");
            return res.status(400).json({ message: "Invalid request data" });
        }

        // Convert `productId` to ObjectId
        const cartItemId = new mongoose.Types.ObjectId(productId);
        console.log("🔄 Converted cartItemId:", cartItemId);

        // ✅ Find the cart item by `_id`, NOT `productId`
        const cartItem = await Cart.findOne({ _id: cartItemId });

        if (!cartItem) {
            console.log("❌ Item not found in cart. Checking database...");
            const allCartItems = await Cart.find();
            console.log("🛒 Current Cart Items:", allCartItems);
            return res.status(404).json({ message: "Item not found in cart" });
        }

        // ✅ Update quantity
        cartItem.quantity = Math.max(1, cartItem.quantity + change);
        await cartItem.save();

        console.log("✅ Cart updated successfully:", cartItem);
        res.json({ success: true, message: "Cart updated", cartItem });
    } catch (error) {
        console.error("❌ Error updating cart:", error);
        res.status(500).json({ message: "Failed to update cart item" });
    }
});


router.delete("/remove/:id", async (req, res) => {
    try {
        const cartItemId = req.params.id; // Get cart item ID from URL

        console.log("🗑️ Received request to remove item:", cartItemId);

        // Check if the item exists
        const cartItem = await Cart.findById(cartItemId);
        if (!cartItem) {
            console.log("❌ Item not found in cart");
            return res.status(404).json({ message: "Item not found in cart" });
        }

        // Remove the item
        await Cart.findByIdAndDelete(cartItemId);
        console.log("✅ Item removed from cart:", cartItem);

        res.json({ success: true, message: "Item removed from cart" });
    } catch (error) {
        console.error("❌ Error removing item:", error);
        res.status(500).json({ message: "Failed to remove item from cart" });
    }
});


module.exports = router;
