const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const Register = require('../models/registers');

console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
console.log("Google Client Secret:", process.env.GOOGLE_CLIENT_SECRET);
console.log("Google Callback URL:", process.env.GOOGLE_CALLBACK_URL);


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Register.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    console.log("Google Profile:", profile); // Debugging
    try {
        let user = await Register.findOne({ Email: profile.emails[0].value });

        if (!user) {
            console.log("New user detected. Creating user...");
            user = new Register({
                Fullname: profile.displayName,
                Email: profile.emails[0].value,
                Password: '',
                ConfirmPassword: ''
            });
            await user.save();
        }
        return done(null, user);
    } catch (error) {
        console.error("Error in Google Strategy:", error);
        return done(error);
    }
}));


module.exports = passport; // ✅ Ensure passport is exported
