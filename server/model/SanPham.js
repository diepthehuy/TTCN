const mongoose = require('mongoose');
const { Schema } = mongoose;

const SanPhamSchema = new Schema({
    TenSanPham: {
        type: String,
        required: true
    },

    MoTa: {
        type: String,
        required: true
    },

    ThongSoKyThuat: {
        type: String,
        default: ""
    },

    AnhThumbNail: {
        type: String,
        default: ""
    },

    TonKho: {
        type: Number,
        required: true
    },

    Hang: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hang",
        required: true
    },

    LoaiThietBi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoaiThietBi",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("SanPham", SanPhamSchema);
