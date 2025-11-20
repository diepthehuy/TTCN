const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Danhgiashcema = new Schema({
    Rating:{
        type:Number,
        required:true
    },
    Comment:String,
    NgayDanhGia:{
        type:Date,
        default:Date.now(),
        required:true
    },
    AdminPhanHoi:String,
    NgayPhanHoi:Date
})

module.exports = mongoose.model('DanhGia',Danhgiashcema);