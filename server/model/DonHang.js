const mongoose = require("mongoose");
const {Schema} = mongoose;

const DonHangSchema = new Schema({
    NgayGiaoDich:{
        type:Date,
        default:Date.now(),
        required:true
    },
    DiaChiGiaoHang:{
        type:String,
        required:true
    },
    TongTien:Number,
    TrangThai:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model("DonHang",DonHangSchema);