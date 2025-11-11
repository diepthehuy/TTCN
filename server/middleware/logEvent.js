const fs = require('fs');
const path = require('path');
const fspromise = require('fs').promises;
const {v4:uuid} = require('uuid');
const {format} = require('date-fns');

const logEvent = async (message,logName)=>{
    const datetime = `${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const log = `${datetime}\t${uuid()}\t${message}\n`;
    console.log(log);
    try{
        if(!fs.existsSync(path.join(__dirname,'..','log'))){
            await fspromise.mkdir(path.join(__dirname,'..','log'));
        }
        await fspromise.appendFile(path.join(__dirname,'..','log',logName),log);
    }catch(err){
        console.log(err);
    }
}

const logger = (req,res,next) => {
    logEvent(`${req.method}\t${req.headers.origin}\t${req.path}`,'reqLog.txt')
    console.log(`${req.method} ${req.path}`);
    next();
}

module.exports = {logger, logEvent};