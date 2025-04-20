document.addEventListener("DOMContentLoaded", function () {
    console.log("🟢 Payment script loaded");

    // Get elements
    const paymentMethodSelect = document.getElementById("payment-method");
    const placeOrderBtn = document.getElementById("place-order");
    const totalAmountEl = document.getElementById("total-amount");
    const billingSection = document.getElementById("billing-section");

    // Check if elements exist
    if (!paymentMethodSelect || !placeOrderBtn || !totalAmountEl) {
        console.error("❌ Missing required elements in the DOM.");
        return;
    }

    // Get total amount from localStorage
    const totalAmount = localStorage.getItem("totalAmount") || "0";
    console.log("💰 Total Amount:", totalAmount);
    totalAmountEl.innerText = totalAmount;

    // Hide all payment options initially
    document.querySelectorAll(".payment-option").forEach(el => el.classList.add("hidden"));

    // Function to toggle payment options
    function togglePaymentOptions() {
        const selectedMethod = paymentMethodSelect.value;
        console.log("🔵 Selected Payment Method:", selectedMethod);

        // Hide all payment options
        document.querySelectorAll(".payment-option").forEach(el => el.classList.add("hidden"));
        
        // Show selected payment option
        if (selectedMethod) {
            const selectedOption = document.getElementById(selectedMethod);
            if (selectedOption) {
                selectedOption.classList.remove("hidden");
            }
        }
    }

    // Add event listener for payment method change
    paymentMethodSelect.addEventListener("change", togglePaymentOptions);

    // Add event listener for place order button
    placeOrderBtn.addEventListener("click", async function () {
        console.log("🟠 Place Order clicked");

        const selectedMethod = paymentMethodSelect.value;
        const name = document.getElementById("full-name")?.value.trim();
        const address = document.getElementById("address")?.value.trim();
        const pincode = document.getElementById("pincode")?.value.trim();

        if (!selectedMethod) {
            alert("⚠️ Please select a payment method before proceeding.");
            return;
        }

        if (!name || !address || !pincode) {
            alert("⚠️ Please fill in all billing details.");
            return;
        }

        const orderData = {
            name,
            address,
            pincode,
            amount: totalAmount,
            paymentMethod: selectedMethod === "cod" ? "Cash on Delivery" : "UPI"
        };

        console.log("📤 Sending order data:", orderData);

        try {
            if (selectedMethod === "cod") {
                // Handle Cash on Delivery
                const response = await fetch("/api/place-order", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(orderData)
                });

                const data = await response.json();

                if (data.success) {
                    console.log("✅ Order placed successfully!", data);
                    alert("🎉 Order placed successfully!");
                    localStorage.removeItem("cartItems"); // Clear cart
                    window.location.href = "/order-confirmation"; // Redirect to confirmation page
                } else {
                    alert("❌ Order failed. Please try again.");
                    console.error("Order error:", data);
                }
            } else if (selectedMethod === "upi") {
                // Check if Razorpay is available
                if (typeof Razorpay === 'undefined') {
                    console.error("❌ Razorpay is not loaded");
                    alert("Payment system is not available. Please try again later or use Cash on Delivery.");
                    return;
                }

                // Handle UPI Payment
                const upiId = document.getElementById("upi-id")?.value.trim();
                if (!upiId) {
                    alert("⚠️ Please enter your UPI ID");
                    return;
                }

                try {
                    const response = await fetch("/payment/process-upi", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            amount: totalAmount,
                            upiId: upiId,
                            description: `Order for ${name}`
                        })
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.error || `Server error: ${response.status}`);
                    }

                    const data = await response.json();

                    if (data.error) {
                        throw new Error(data.error);
                    }

                    // Initialize Razorpay
                    const options = {
                        key: data.key,
                        amount: data.amount,
                        currency: data.currency,
                        name: data.name,
                        description: data.description,
                        order_id: data.order_id,
                        prefill: {
                            upi_id: upiId
                        },
                        theme: {
                            color: '#3399cc'
                        },
                        handler: async function(response) {
                            try {
                                // Save order after successful payment
                                const orderResponse = await fetch("/api/place-order", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        ...orderData,
                                        paymentId: response.razorpay_payment_id
                                    })
                                });

                                const orderResult = await orderResponse.json();

                                if (orderResult.success) {
                                    console.log("✅ Order placed successfully!", orderResult);
                                    alert("🎉 Payment successful and order placed!");
                                    localStorage.removeItem("cartItems"); // Clear cart
                                    window.location.href = "/order-confirmation"; // Redirect to confirmation page
                                } else {
                                    throw new Error("Failed to save order");
                                }
                            } catch (error) {
                                console.error("❌ Error saving order:", error);
                                alert("Payment successful but order saving failed. Please contact support.");
                            }
                        }
                    };

                    try {
                        const rzp = new Razorpay(options);
                        rzp.open();
                    } catch (error) {
                        console.error("❌ Error initializing Razorpay:", error);
                        alert("Payment system error. Please try again later or use Cash on Delivery.");
                    }
                } catch (error) {
                    console.error("❌ Error processing UPI payment:", error);
                    
                    // Show a more user-friendly error message
                    if (error.message.includes("authentication failed") || error.message.includes("not properly configured")) {
                        alert("Payment system is not properly configured. Please try Cash on Delivery or contact support.");
                    } else {
                        alert(`Payment processing failed: ${error.message}`);
                    }
                }
            } else {
                alert("⚠️ Selected payment method is not supported yet.");
            }
        } catch (error) {
            console.error("❌ Error processing order:", error);
            alert("Something went wrong. Please try again later.");
        }
    });
});
