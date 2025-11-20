const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChiTietshcema = new Schema({
    TenSanPham:{
        type:String,
        required:true
    },
    SoLuong:{
        type:Number,
        required:true
    },
    DonGia:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('ChiTietDonHang',ChiTietshcema);