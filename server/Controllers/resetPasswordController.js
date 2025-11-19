const User = require('../model/User');
const bcrypt = require('bcrypt');
const sendEmail = require('../services/sendEmail');

const resetPassword = async (req, res) => {
    const { username, email, newPassword, resetCode } = req.body;
    if (!username && !email) return res.status(400).json({ message: "Vui lòng nhập tên đăng nhập hoặc email" });
    const user = await User.findOne({
        $or: [{ email: email }, { username: username }]
    }).exec();
    if (!user) return res.status(409).json({ message: "Email không tồn tại" });
    try {
        if (!resetCode && !user.resetCode) {
            const code = Math.floor(100000 + Math.random() * 900000);
            user.resetCode = code;
            user.resetCodeExpiration = Date.now() + 5 * 60 * 1000;
            await user.save();
            await sendEmail(user.email, code);
            return res.status(200).json({ message: "Mã xác nhận đã được gửi đến email của bạn" });
        } else if (!resetCode && user.resetCode) {
            return res.status(400).json({ message: "Vui lòng nhập mã xác thực" });
        } else if (Date.now() > user.resetCodeExpiration) {
            return res.status(400).json({ message: "Mã xác nhận đã hết hạn" });
        } else if (parseInt(resetCode) !== user.resetCode) {
            return res.status(400).json({ message: "Mã xác nhận không đúng" });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetCode = null;
        user.resetCodeExpiration = null;
        await user.save();
        res.status(200).json({ message: "Đặt lại mật khẩu thành công!" });
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = { resetPassword }