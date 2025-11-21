const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hangshcema = new Schema({
    Hang: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Hang', Hangshcema);