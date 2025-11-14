import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                <form onSubmit={(e) => { }}>
                    <input type="text" placeholder='Email hoặc tên đăng nhập' />
                    <input type="text" placeholder='Mật khẩu' />
                    <Link to="/password">Bạn quên mật khẩu?</Link>
                    <button type='submit'>Đăng nhập</button>
                </form>
            </div>
            <img src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" alt="" />
        </section>
    )
}

export default Login