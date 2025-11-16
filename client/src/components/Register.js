import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

//tạm hoãn thiện
const Register = ({ user, setUser, email, setEmail, fullname, setFullname, phone, setPhone }) => {
  const [comfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const vaidator = () => {
    if (!user || !password || !email || !fullname || !phone) {
      setError(true);
      setErrorMessage("Vui lòng điền đầy đủ thông tin");
      return false;
    }
    else if (password !== comfirmPassword) {
      setError(true);
      setErrorMessage("Mật khẩu không khớp");
      return false;
    } else if (!email.includes("@gmail.com")) {
      setError(true);
      setErrorMessage("Email không hợp lệ");
      return false;
    } else if (phone.length < 10 || phone.length >= 11) {
      setError(true);
      setErrorMessage("Số điện thoại không hợp lệ");
      return false;
    }
    return true;
  }

  const autologin = async (user) => {
    try {
      const response = await fetch("http://localhost:3500/auth", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(user)
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setErrorMessage("");
        setError(false);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("username", data.foundUser.username);
        localStorage.setItem("fullname", data.foundUser.fullname);
        localStorage.setItem("email", data.foundUser.email);
        localStorage.setItem("phone", data.foundUser.phone);
      } else if (response.status === 401) {
        setError(true);
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const signup = async () => {
    if (vaidator() === false) return;
    const user1 = { "username": user, "password": password, "email": email, "phone": phone, "fullname": fullname }
    try {
      const response = await fetch("http://localhost:3500/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(user1)
      });
      const data = await response.json();
      if (response.status === 400) {
        setError(true);
        setErrorMessage(data.message);
        return;
      } else if (response.status === 409) {
        setError(true);
        setErrorMessage(data.message);
        return;
      } else if (response.status === 201) {
        await autologin({ "username": user, "password": password });
        navigate("/");
      }
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
            <input type="text" placeholder='Họ và Tên' value={fullname} onChange={(e) => { setFullname(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
            <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
            <input type="text" placeholder='Tên đăng nhập' value={user} onChange={(e) => { setUser(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
            <input type="password" placeholder='Mật khẩu' value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
            <input type="password" placeholder='Nhập lại mật khẩu' value={comfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
            <input type="text" placeholder='Số điện thoại' value={phone} onChange={(e) => setPhone(e.target.value)} style={{ borderColor: "red", outlineColor: "red" }} />
            <button type='submit' onClick={signup}>Tạo tài khoản</button>
          </form>
        }
        {!error &&
          <form onSubmit={(e) => { e.preventDefault() }}>
            <input type="text" placeholder='Họ và Tên' value={fullname} onChange={(e) => { setFullname(e.target.value) }} />
            <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="text" placeholder='Tên đăng nhập' value={user} onChange={(e) => { setUser(e.target.value) }} />
            <input type="password" placeholder='Mật khẩu' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <input type="password" placeholder='Nhập lại mật khẩu' value={comfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
            <input type="text" placeholder='Số điện thoại' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type='submit' onClick={signup}>Tạo tài khoản</button>
          </form>
        }
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
      <img src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg" alt="" />
    </section>
  )
}

export default Register