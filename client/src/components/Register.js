import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
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
        <form onSubmit={(e) => { }}>
          <input type="text" placeholder='Họ và Tên' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Tên đăng nhập' />
          <input type="text" placeholder='Mật khẩu' />
          <input type="text" placeholder='Nhập lại mật khẩu' />
          <input type="text" placeholder='Số điện thoại' />
          <button type='submit'>Tạo tài khoản</button>
        </form>
      </div>
      <img src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg" alt="" />
    </section>
  )
}

export default Register