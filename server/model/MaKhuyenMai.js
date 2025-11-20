const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mashcema = new Schema({
    MaKhuyenMai:{
        type:String,
        required:true
    },
    PhanTram:Number,
    NgayBatDau:{
        type:Date,
        default:Date.now(),
        required :true
    },
    Ngayketthuc:Date,
    TrangThai:{
        type:Boolean,
        required
    }
}, { timestamps: true })

module.exports = mongoose.model('Makm',Mashcema);