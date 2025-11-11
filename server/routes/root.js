const express = require('express');
const router = express.Router();
const path = require('path');

router.get(['/', '/index', '/index.html'],(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','index.html'));
})

router.get(['/new-page','/new-page.html'],(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','new-page.html'))
})

router.get(['/old-page.html','/old-page'],(req,res)=>{
    res.redirect(301,path.join(__dirname,'view','new-pagee.html'));
    
})

module.exports = router;