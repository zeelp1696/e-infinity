const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/student", {
    
}).then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);// Exit the process with a non-zero status code
})

module.exports = mongoose;