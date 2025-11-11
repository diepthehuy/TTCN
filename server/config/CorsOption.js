const whitelist=['https://www.google.com','http://127.0.0.1:3500','http://localhost:3000'];
const corsOpt={
    origin:(origin,callback) =>{;
        if(whitelist.indexOf(origin)!== -1 ||!origin){
            callback(null,true);
        }else{
            callback(new Error('prevented by CORS'));
        }
    },
    optionsSuccessStatus:200
}

module.exports = {corsOpt, whitelist};