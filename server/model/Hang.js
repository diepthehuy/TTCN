const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hangshcema = new Schema({
    Hang:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Hang',Hangshcema);