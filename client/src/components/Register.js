import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

//hàm đk chưa tối ưu
const Register = ({ user, setUser, password, setPassword, email, setEmail, fullname, setFullname, phone, setPhone }) => {
  const [comfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    if ((password.length < 6 || user.length < 3 || phone.length < 10 || !email.includes("@"))&& (!fullname && !user && !password && !email && !comfirmPassword && !phone)) {
      setError(true);
      setErrorMessage("Vui lòng điền đầy đủ thông tin hợp lệ");
      return;
    }
    const user1 = { "username": user, "password": password, "email": email, "phone": phone, "fullname": fullname }
    try {
        await fetch("http://localhost:3500/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(user1)
      });
      setError(false);
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
        {error &&
          <form onSubmit={(e) => { e.preventDefault() }}>
            <input type="text" placeholder='Họ và Tên' value={fullname} onChange={(e) => { setFullname(e.target.value) }} style={{borderColor:"red",outlineColor:"red"}} />
            <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} style={{borderColor:"red",outlineColor:"red"}} />
            <input type="text" placeholder='Tên đăng nhập' value={user} onChange={(e) => { setUser(e.target.value) }} style={{borderColor:"red",outlineColor:"red"}} />
            <input type="password" placeholder='Mật khẩu' value={password} onChange={(e) => { setPassword(e.target.value) }} style={{borderColor:"red",outlineColor:"red"}} />
            <input type="password" placeholder='Nhập lại mật khẩu' value={comfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} style={{borderColor:"red",outlineColor:"red"}} />
            <input type="text" placeholder='Số điện thoại' value={phone} onChange={(e) => setPhone(e.target.value)} style={{borderColor:"red",outlineColor:"red"}} />
            <button type='submit' onClick={signup}>Tạo tài khoản</button>
          </form>
        }
        {!error &&
          <form onSubmit={(e) => { e.preventDefault() }}>
            <input type="text" placeholder='Họ và Tên' value={fullname} onChange={(e) => { setFullname(e.target.value) }}  />
            <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }}  />
            <input type="text" placeholder='Tên đăng nhập' value={user} onChange={(e) => { setUser(e.target.value) }}  />
            <input type="password" placeholder='Mật khẩu' value={password} onChange={(e) => { setPassword(e.target.value) }}  />
            <input type="password" placeholder='Nhập lại mật khẩu' value={comfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}  />
            <input type="text" placeholder='Số điện thoại' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type='submit' onClick={signup}>Tạo tài khoản</button>
          </form>
        }
        <p style={{color:"red"}}>{errorMessage}</p>
      </div>
      <img src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg" alt="" />
    </section>
  )
}

export default Register