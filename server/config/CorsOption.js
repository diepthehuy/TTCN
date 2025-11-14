const whitelist=['https://www.google.com','http://127.0.0.1:3500','http://localhost:3000'];//Danh sách các server được chạm đến backend này
const corsOpt={
    origin:(origin,callback) =>{//origin là 1 nguồn dẫn vd như mở console cuả trình duyệt google lên và fetch vào địa chỉ này thì origin sẽ là https://www.google.com
        if(whitelist.indexOf(origin)!== -1 ||!origin){//kiểm tra origin có nằm trong danh sách cho phép không
            callback(null,true);
        }else{
            callback(new Error('prevented by CORS'));
        }
    },
    optionsSuccessStatus:200
}

module.exports = {corsOpt, whitelist};