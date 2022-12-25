const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide your name."],
        trim: true,
        minLength: [3, "Name must be at least 3 character."],
        maxLength: [50, "Name is too large."]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required."]
    },
    password: {
        type: String,
        required: [true, "Email address is required."],
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password."],
    },
    status: {
        type: String,
        enum: ["active", "inactive", "blocked"],
        default: "active"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    img: String,
    phone: String,
    address: String,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
}, {
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;