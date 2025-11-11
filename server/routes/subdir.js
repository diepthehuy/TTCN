const express = require('express');
const router = express.Router();
const path = require('path');
//Mấy này chỉ để serve view(frontend) trong lúc t học thôi chứ không cần vì mình có bên server frontend phục vụ view rồi
//các file html này được route với endpoint http://localhost:3500/subdir hoặc http://localhost:3500/subdir/
router.get(['/', '/index', '/index.html'],(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','subdir','index.html'));
})

router.get([ '/test', '/test.html'],(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','subdir','test.html'));
})

module.exports = router;