import React from 'react'
import { Link } from 'react-router-dom'
import {FaUser, FaShoppingCart} from 'react-icons/fa'
const Nav = () => {
  return (
    <nav>
      <h1>Shop</h1>
      <input type="text" placeholder='Tìm kiếm sản phẩm'/>
      <div>
        <Link><FaUser/></Link>
        <Link >Đăng nhập /</Link>
        <Link >Đăng ký</Link>
      </div>
      <Link ><FaShoppingCart/> Giỏ hàng</Link>
    </nav>
  )
}

export default Nav