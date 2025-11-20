const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaoHanhschema = new Schema({
    ThoiLuong:String,
    NgayDat:{
        type:Date,
        required:true
    },
    NgayHet:{
        type:Date,
        required:true
    },
    TrangThai:{
        type:Boolean,
        required:true
    },
    GhiChu:String
})

module.exports = mongoose.model('BaoHanh',BaoHanhschema);