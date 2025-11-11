require('dotenv').config();
const path = require('path');
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

dbConnect();

app.use(logger);

app.use(credentials);
app.use(cors(corsOpt));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

//middleware for cookie
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/subdir',express.static('public'));

app.use('/',require('./routes/root'));
app.use('/subdir',require('./routes/subdir'));
app.use('/register',require('./routes/register'));
app.use('/auth',require('./routes/auth'));
app.use('/refresh',require('./routes/refresh'));
app.use('/logout',require('./routes/logout'));

app.use(verifyJWT);
app.use('/employees',require('./routes/api/employees'));


app.use((/^\/.*$/,(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'view','404.html'));
    }else if(req.accepts('json')){
        res.json({error: "404 Not Found"});
    }else{
        res.type('txt').send('404 Not Found');
    }
    
}))

app.use(errorHanlder);
mongoose.connection.once('open',()=>{
    console.log("✅ Connected to MongoDB:", mongoose.connection.name, "on host:", mongoose.connection.host);
    app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}\n`)});
});

