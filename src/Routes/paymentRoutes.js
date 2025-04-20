const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

// Check if Razorpay keys are configured
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET || 
    process.env.RAZORPAY_KEY_ID === 'your_razorpay_key_id' || 
    process.env.RAZORPAY_KEY_SECRET === 'your_razorpay_key_secret') {
    console.error('⚠️ Razorpay API keys are not properly configured. Please update your .env file with valid keys.');
}

// Initialize Razorpay
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Route to display UPI payment form
router.get('/upi', (req, res) => {
    res.render('upi');
});

// Route to process UPI payment
router.post('/process-upi', async (req, res) => {
    try {
        console.log('📥 Received UPI payment request:', req.body);
        
        const { amount, upiId, description } = req.body;

        // Validate input
        if (!amount || !upiId) {
            console.error('❌ Missing required fields:', { amount, upiId });
            return res.status(400).json({
                success: false,
                error: 'Amount and UPI ID are required'
            });
        }

        // Convert amount to paise (Razorpay expects amount in smallest currency unit)
        const amountInPaise = Math.round(parseFloat(amount) * 100);
        console.log(`💰 Converting amount from ${amount} to ${amountInPaise} paise`);

        // Check if Razorpay keys are valid
        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET || 
            process.env.RAZORPAY_KEY_ID === 'your_razorpay_key_id' || 
            process.env.RAZORPAY_KEY_SECRET === 'your_razorpay_key_secret') {
            console.error('❌ Razorpay API keys are not properly configured');
            return res.status(500).json({
                success: false,
                error: 'Payment system is not properly configured. Please contact support.'
            });
        }

        try {
            // Create Razorpay order
            console.log('🔄 Creating Razorpay order...');
            const order = await razorpay.orders.create({
                amount: amountInPaise,
                currency: 'INR',
                receipt: `order_${Date.now()}`,
                payment_capture: 1
            });
            console.log('✅ Razorpay order created:', order);

            // Create payment options
            const paymentOptions = {
                key: process.env.RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: 'Your Company Name',
                description: description || 'UPI Payment',
                order_id: order.id,
                prefill: {
                    upi_id: upiId
                },
                theme: {
                    color: '#3399cc'
                }
            };
            console.log('📤 Sending payment options to client');

            // Return payment options to frontend
            res.json(paymentOptions);
        } catch (razorpayError) {
            console.error('❌ Razorpay Error:', razorpayError);
            
            // Handle authentication error specifically
            if (razorpayError.statusCode === 401) {
                return res.status(500).json({
                    success: false,
                    error: 'Payment authentication failed. Please contact support.'
                });
            }
            
            // Handle other Razorpay errors
            return res.status(500).json({
                success: false,
                error: 'Payment processing failed: ' + (razorpayError.error?.description || razorpayError.message || 'Unknown error')
            });
        }
    } catch (error) {
        console.error('❌ Payment Error:', error);
        res.status(500).json({
            success: false,
            error: 'Payment processing failed: ' + (error.message || 'Unknown error')
        });
    }
});

// Route to verify payment
router.post('/verify', async (req, res) => {
    try {
        console.log('📥 Received payment verification request');
        
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        // Validate input
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            console.error('❌ Missing required fields for verification');
            return res.status(400).json({
                success: false,
                message: 'Missing required fields for verification'
            });
        }

        // Verify payment signature
        console.log('🔍 Verifying payment signature...');
        const generated_signature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + '|' + razorpay_payment_id)
            .digest('hex');

        if (generated_signature === razorpay_signature) {
            console.log('✅ Payment signature verified successfully');
            res.json({
                success: true,
                message: 'Payment verified successfully'
            });
        } else {
            console.error('❌ Payment signature verification failed');
            res.status(400).json({
                success: false,
                message: 'Payment verification failed'
            });
        }
    } catch (error) {
        console.error('❌ Verification Error:', error);
        res.status(500).json({
            success: false,
            error: 'Payment verification failed: ' + (error.message || 'Unknown error')
        });
    }
});

module.exports = router; 