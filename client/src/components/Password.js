import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'

//Chưa hoàn thiện
const Password = () => {
    return (
        <section className='form'>
            <div>
                <div>
                    <Link to="/login" ><h1>Đặt lại mật khẩu</h1></Link>
                </div>
                <div>
                    <p>Bạn vui lòng hoàn tất các thông tin xác thực bên dưới để chúng tôi đặt lại mật khẩu cho tài khoản của bạn.</p>
                </div>
                <form onSubmit={(e) => { }}>
                    <input type="text" placeholder='Email hoặc tên đăng nhập' />
                    <input type="text" placeholder='Mật khẩu' />
                    <input type="text" placeholder='Mật khẩu mới' />
                    <button type='submit'>Đặt lại mật khẩu</button>
                    <Link to="/login"><FaAngleLeft/>Quay lại trang đăng nhập</Link>
                </form>
            </div>
            <img src="https://cdn.divineshop.vn/static/c92dc142033ca6a66cda62bc0aec491b.svg" alt="" />
        </section>
    )
}

export default Password