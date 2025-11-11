import { useState,useEffect } from "react";
import Layout from "./components/Layout";
function App() {
      //test 2 api của bên backend. 1 cái là đường dãn '/auth'là đăng nhập và '/register' là đăng ký
      const user ={"username": "walt12","password": "Aa$12345"};//user này đã có trong mongoDB
      const user1 = {"username": "walt13","password": "Aa$12345"}//chưa có hoặc đã có rồi do test xong chưa xóa user bên MongoDB
      //test nhẹ api đăng nhập
      const login =async () =>{
        try{
          const reponse = await fetch("http://localhost:3500/auth",{
          method: 'POST',// gửi bàng POST, muốn biết xài method gửi gì thì xem bên route của server xem endpoint đó nhận gì
          headers:{'Content-Type':'application/json'},//Định dạng nội dung gửi là JSON
          credentials: 'include',//này vẫn chưa rõ mà chỉ là yêu cầu khi gửi http của bọn Chrome, bọn trình duyệt khác hình như ko yêu cầu
          body: JSON.stringify(user)//body là nội dung request http bên frontend gửi đến server backend trong đó nội dung là user
        });
          const result = reponse.data;
          console.log(result);//Muốn xem thì mở dev mode trình duyệt vào message mà thường thì không có gì
        }catch(err){
          console.log(err.message);//Báo lỗi
        }
      }
      //test nhẹ hàm đăng ký
      const signup =async () =>{
        try{
          const reponse = await fetch("http://localhost:3500/register",{
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          credentials: 'include',
          body: JSON.stringify(user1)
        });
          const result = reponse.data;
          console.log(result);
        }catch(err){
          console.log(err.message);
        }
      }

  return (
    <div>
      <Layout/>
      <p>Ambatukam</p>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Sign-up</button>
    </div>
  );
}

export default App;
