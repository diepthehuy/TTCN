import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

//Xưa hoàn thiện
const Login = ({user,email,password}) => {
    const [loggedInUser,setLoggedInUser] = React.useState(user || "");
    const [loggedInEmail,setLoggedInEmail] = React.useState(email || "");
    const [loggedInPassword,setLoggedInPassword] = React.useState(password || "");

    //test nhẹ route đăng nhập
    const login = async () => {
        const userLogin = { "username": loggedInUser, "password": loggedInPassword }
        try {
            const reponse = await fetch("http://localhost:3500/auth", {
                method: 'POST',// gửi bàng POST, muốn biết xài method gửi gì thì xem bên route của server xem endpoint đó nhận gì
                headers: { 'Content-Type': 'application/json' },//Định dạng nội dung gửi là JSON
                credentials: 'include',//này vẫn chưa rõ mà chỉ là yêu cầu khi gửi http của bọn Chrome, bọn trình duyệt khác hình như ko yêu cầu
                body: JSON.stringify(userLogin)//body là nội dung request http bên frontend gửi đến server backend trong đó nội dung là user
            });
            const result = reponse.data;
            console.log(result);//Muốn xem thì mở dev mode trình duyệt vào message mà thường thì không có gì
        } catch (err) {
            console.log(err.message);//Báo lỗi
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
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input type="text" placeholder='Email hoặc tên đăng nhập' value={loggedInUser} onChange={(e)=>{setLoggedInUser(e.target.value)}} />
                    <input type="password" placeholder='Mật khẩu' value={loggedInPassword} onChange={(e)=>{setLoggedInPassword(e.target.value)}} />
                    <Link to="/password">Bạn quên mật khẩu?</Link>
                    <button type='submit' onClick={login}>Đăng nhập</button>
                </form>
            </div>
            <img src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" alt="" />
        </section>
    )
}

export default Login