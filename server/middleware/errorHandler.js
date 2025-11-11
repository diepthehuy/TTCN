const {logEvent} = require('./logEvent');

const errorHanlder = (err,req,res,next) => {
    logEvent(`${err.name}: ${err.message}`,'errLog.txt');
    console.log(err.stack);
    res.status(500).send(err.message);
}

module.exports= errorHanlder;