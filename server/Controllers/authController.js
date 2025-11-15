const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handlelogin = async (req,res) =>{
     const{ username, password } = req.body;
    if(!username&&!password)return res.sendStatus(400);
    const foundUser = await User.findOne({username: username}).exec();
    if(!foundUser) return res.sendStatus(401);
    const match = bcrypt.compare(password,foundUser.password);
    if(match){
        const roles = Object.values(foundUser.roles);
        //JWTs
        const accessToken =  jwt.sign(
            {"UserInfo":
                {
                "username":foundUser.username,
                "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn : '900s'}
        );
        const refreshToken = jwt.sign(
            {"username":foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn : '1d'}
        );
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        
        //end
        res.cookie('jwt', refreshToken, {httpOnly: true,sameSite : 'None',secure: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({accessToken,foundUser});
    }else{
        res.sendStatus(401);
    }
}

module.exports = {handlelogin};