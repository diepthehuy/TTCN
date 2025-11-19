const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handlelogin = async (req, res) => {
    const { username, password, email } = req.body;
    const foundUser = await User.findOne({
        $or: [{ username: username }, { email: email }]
    }).exec();
    if (!foundUser) return res.status(401).json({ message: "Tên đăng nhập hoặc email không đúng" });
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        //JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo":
                {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);

        //end
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ accessToken, foundUser });
    } else {
        res.status(401).json({ message: "Tên đăng nhập và email hoặc mật khẩu không đúng" });
    }
}

module.exports = { handlelogin };