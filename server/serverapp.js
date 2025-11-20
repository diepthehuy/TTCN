require('dotenv').config();
const express = require('express');
const app= express();
const {logger} = require('./middleware/logEvent');
const errorHanlder = require('./middleware/errorHandler');
const cors = require('cors');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const {corsOpt} = require('./config/CorsOption');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');

const PORT = process.env.PORT || 3500;
//connect database MongoDB, tạo tk rồi báo t add vào database
dbConnect();
//hàm app.use() sẽ được thực thi vs mọi method http và nếu biến đường dẫn '/' nằm ở đầu hay không thì logger này vẫn sẽ chạy
app.use(logger);

app.use(credentials);
app.use(cors(corsOpt));//CORS

app.use(express.urlencoded({extended:false}));

app.use(express.json());

//middleware for cookie
app.use(cookieParser());

app.use('/register',require('./routes/register'));
app.use('/auth',require('./routes/auth'));
app.use('/refresh',require('./routes/refresh'));
app.use('/logout',require('./routes/logout'));
app.use('/reset',require('./routes/reset'));

app.use(verifyJWT);
app.use('/employees',require('./routes/api/employees'));
app.use('/sanpham',require('./routes/api/sanpham'));


app.use(errorHanlder);
mongoose.connection.once('open',()=>{
    console.log("✅ Connected to MongoDB:", mongoose.connection.name, "on host:", mongoose.connection.host);
    app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}\n`)});
});

