const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    amount: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "Pending" }
});

// ✅ Ensure correct export
module.exports = mongoose.model("Order", orderSchema);
