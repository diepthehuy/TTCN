const mongoose = require("mongoose");
const { Schema } = mongoose;

const DonHangSchema = new Schema({
    KhachHang: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    MaKhuyenMai: {
        type: Schema.Types.ObjectId,
        ref: "MaKhuyenMai",
        default: null
    },
    PhuongThucThanhToan: {
        type: Schema.Types.ObjectId,
        ref: "PhuongThucThanhToan",
        required: true
    },

    NgayGiaoDich: {
        type: Date,
        default: Date.now
    },

    DiaChiGiaoHang: {
        type: String,
        required: true,
        trim: true
    },

    TongTien: {
        type: Number,
        required: true,
        min: 0
    },

    TrangThai: {
        type: String,
        enum: ["cho_xac_nhan", "dang_giao", "da_giao", "da_huy"],
        default: "cho_xac_nhan"
    }
}, { timestamps: true });

module.exports = mongoose.model("DonHang", DonHangSchema);
