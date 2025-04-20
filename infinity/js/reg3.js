
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Input fields
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("ConfirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous errors
    errorMessage.textContent = "";

    // Validation
    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    // Success Message
    alert("Registration successful! Welcome to Infinity!");
    console.log({
        fullname: fullname,
        email: email,
        password: password
    });

    // Clear form fields
    document.getElementById("registerForm").reset();
    });
// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
