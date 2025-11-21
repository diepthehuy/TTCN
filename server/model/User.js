const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,          
        lowercase: true,       
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,         
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Admin: Number,
        Editor: Number
    },

    fullname: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },

    gender: Boolean,
    age: Number,

    TrangThai: {
        type: Boolean,
        default: true
    },

    Address: String,

    NgayTao: {
        type: Date,
        default: Date.now
    },

    refreshToken: String,
    resetCode: Number,
    resetCodeExpiration: Date,         

    // FOR GOOGLE/FACEBOOK LOGIN
    googleId: String,
    facebookId: String
});

module.exports = mongoose.model("User", userSchema);
