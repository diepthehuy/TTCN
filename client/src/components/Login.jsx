import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser, setFullname, setEmail, setPhone,setRole }) => {
    const [loggedInUser, setLoggedInUser] = useState("");
    const [loggedInPassword, setLoggedInPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const validator = () => {
        if (!loggedInUser || !loggedInPassword) {
            setError(true);
            setErrorMessage("Vui lòng điền đầy đủ thông tin");
            return false;
        } return true;
    }

    const login = async () => {
        if (validator() === false) return;
        let userLogin={};
        if(loggedInUser.includes("@gmail.com")){
            userLogin = { "email": loggedInUser.trim(), "password": loggedInPassword };
        }else{
            userLogin = { "username": loggedInUser.trim(), "password": loggedInPassword };
        } 
        try {
            const response = await fetch("http://localhost:3500/auth", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(userLogin)
            });
            const data = await response.json();
            if (response.status === 200) {
                setUser(data.foundUser.username);
                setEmail(data.foundUser.email);
                setFullname(data.foundUser.fullname);
                setPhone(data.foundUser.phone);
                setRole(data.foundUser.roles);
                setErrorMessage("");
                setError(false);
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("username", data.foundUser.username);
                localStorage.setItem("fullname", data.foundUser.fullname);
                localStorage.setItem("email", data.foundUser.email);
                localStorage.setItem("phone", data.foundUser.phone);
                localStorage.setItem("role", JSON.stringify(data.foundUser.roles));
                navigate("/");
            } else if (response.status === 401) {
                setError(true);
                setErrorMessage(data.message);
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <section className='form'>
            <div>
                <div>
                    <Link to="/login" ><h1>Đăng nhập /</h1></Link>
                    <Link to="/register"><h1 style={{ color: "grey" }}> Đăng ký</h1></Link>
                </div>
                <div>
                    <p>Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.</p>
                </div>
                {error &&
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <input type="text" placeholder='Email hoặc tên đăng nhập' value={loggedInUser} onChange={(e) => { setLoggedInUser(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
                        <input type="password" placeholder='Mật khẩu' value={loggedInPassword} onChange={(e) => { setLoggedInPassword(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
                        <Link to="/password">Bạn quên mật khẩu?</Link>
                        <button type='submit' onClick={login}>Đăng nhập</button>
                    </form>
                }
                {!error &&
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <input type="text" placeholder='Email hoặc tên đăng nhập' value={loggedInUser} onChange={(e) => { setLoggedInUser(e.target.value) }} />
                        <input type="password" placeholder='Mật khẩu' value={loggedInPassword} onChange={(e) => { setLoggedInPassword(e.target.value) }} />
                        <Link to="/password">Bạn quên mật khẩu?</Link>
                        <button type='submit' onClick={login}>Đăng nhập</button>
                    </form>}
                <p style={{ color: "red" }}>{errorMessage}</p>
            </div>
            <img src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" alt="" />
        </section>
    )
}

export default Login