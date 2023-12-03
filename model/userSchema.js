const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    uni: {
        type: String,
        required: true
    },
    collage: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    syear: {
        type: String,
        required: true
    },
    eyear: {
        type: String,
        required: true
    }



})

const users = new mongoose.model("myusers", userSchema);

module.exports = users;


