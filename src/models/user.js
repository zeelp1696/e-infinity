// models/User.js (example)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    // ... other fields
    // _id field is automatically added by Mongoose if not defined here
});

module.exports = mongoose.model('user', userSchema);