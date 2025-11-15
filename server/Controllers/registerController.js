const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req,res)=>{
    const{fullname,email, username, password,phone } = req.body;
    if(!username&&!password&&!fullname&&!email&&!phone)return res.status(400).json({"message":"Thiếu thông tin đăng ký"});
    const duplicate = await User.findOne({username: username}).exec();
    if(duplicate)return res.sendStatus(409);
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const result = await User.create({
            "username": username,
            "password": hashedPassword,
            "email": email,
            "fullname": fullname,
            "phone": phone
        });
        res.status(201).json({"Message":`Tài khoản ${result} đã được tạo thành công`});
    }catch(err){
        res.status(500).json({"message":err.message});
    }
}

module.exports={handleNewUser}