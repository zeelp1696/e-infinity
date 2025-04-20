const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CustomerSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    ConfirmPassword: {
        type: String,
        required: true,
    }


}) 

CustomerSchema.methods.generateAuthToken = async function(){
    try{
            console.log(this._id);
            const token = jwt.sign({_id:this._id}, "mynameiszeelandiambackenddeveloper");
            console.log(token);
            
    }catch(error){
        res.send("error is there");
} }

CustomerSchema.pre("save", async function(next) {
    if(this.isModified){
    console.log(`the password is ${this.Password}`);
    this.Password = await bcrypt.hash(this.Password, 10);
    console.log(`the password after hashing is ${this.Password}`);

     this.ConfirmPassword = undefined;
    }
    next();
});

// create a collection

const Register = new mongoose.model("Register", CustomerSchema);

module.exports= Register;