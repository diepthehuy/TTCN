import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = ({user,setUser,password,setPassword,email,setEmail,fullname,setFullname,phone,setPhone}) => {
   //test nhẹ route đăng ký
    const [comfirmPassword,setConfirmPassword] = React.useState("");
    const navigate = useNavigate();
    const signup = async () => {
        if(password!==comfirmPassword){
            console.log("Mật khẩu không khớp");
            return;
        }
        const user1 = { "username": user, "password": password,"email":email,"phone":phone,"fullname":fullname }
        try {
            const reponse = await fetch("http://localhost:3500/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(user1)
            });
            const result = reponse.data;
            console.log(result);
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    }

  return (
    <section className='form'>
      <div>
        <div>
          <Link to="/login"><h1 style={{ color: "grey" }}>Đăng nhập /</h1></Link>
          <Link to="/register"><h1 > Đăng ký</h1></Link>
        </div>
        <div>
          <p>Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn</p>
        </div>
        <form onSubmit={(e) => {e.preventDefault() }}>
          <input type="text" placeholder='Họ và Tên' value={fullname} onChange={(e)=>{setFullname(e.target.value)}} />
          <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="text" placeholder='Tên đăng nhập' value={user} onChange={(e)=>{setUser(e.target.value)}} />
          <input type="password" placeholder='Mật khẩu' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <input type="password" placeholder='Nhập lại mật khẩu' value={comfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
          <input type="text" placeholder='Số điện thoại' value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <button type='submit' onClick={signup}>Tạo tài khoản</button>
        </form>
      </div>
      <img src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg" alt="" />
    </section>
  )
}

export default Register