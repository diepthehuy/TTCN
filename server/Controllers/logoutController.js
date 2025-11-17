const User = require('../model/User');

const handleLogout = async (req,res) =>{
    const cookies = req.cookies;
    if(!cookies?.jwt)return res.sendStatus(204);
    const refreshToken = cookies.jwt;
    console.log(refreshToken);
    //kiem tra refresh token trong db
    const foundUser = await User.findOne({refreshToken}).exec();
    if(!foundUser) {
        res.clearCookie('jwt' ,{httpOnly: true,sameSite : 'None', secure: true ,path: "/" });
        return res.sendStatus(204);
    }
   //xoa refresh token trong db
   foundUser.refreshToken = ''; 
   const result = await foundUser.save();
   console.log(result);
   
   res.clearCookie('jwt' ,{httpOnly: true,sameSite : 'None', secure: true, path: "/" });
   res.sendStatus(204);
}

module.exports = {handleLogout};