const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req,res)=>{
    const{fullname,email, username, password,phone } = req.body;
    if(!username||!password||!fullname||!email||!phone)return res.sendStatus(400);
    const duplicateuser = await User.findOne({username: username}).exec();
    if(duplicateuser)return res.status(409).json({message:"Username đã tồn tại"});
    const duplicateemail = await User.findOne({email: email}).exec();
    if(duplicateemail)return res.status(409).json({message:"Email đã tồn tại"});
    const duplicatephone = await User.findOne({phone: phone}).exec();
    if(duplicatephone)return res.status(409).json({message:"Số điện thoại đã tồn tại"});
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const result = await User.create({
            "username": username,
            "password": hashedPassword,
            "email": email,
            "fullname": fullname,
            "phone": phone
        });
        res.status(201).json({message:"Đăng ký thành công!"});
        res.json(result);
    }catch(err){
        res.sendStatus(500);
    }
}

module.exports={handleNewUser}