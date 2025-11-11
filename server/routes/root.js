const express = require('express');
const router = express.Router();
const path = require('path');
//Mấy này chỉ để serve view(frontend) trong lúc t học thôi chứ không cần vì mình có bên server frontend phục vụ view rồi
//các file html này được route với endpoint http://localhost:3500 hoặc http://localhost:3500/ xem các endpoint ở file serverapp.js
router.get(['/', '/index', '/index.html'],(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','index.html'));
})
//nêu endpoint http://localhost:3500/new-page hoặc http://localhost:3500/new-page.html thì phục vụ file html này
router.get(['/new-page','/new-page.html'],(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','new-page.html'))
})

router.get(['/old-page.html','/old-page'],(req,res)=>{
    res.redirect(301,path.join(__dirname,'view','new-pagee.html'));
    
})

module.exports = router;