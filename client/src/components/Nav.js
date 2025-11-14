import React from 'react'
import { Link } from 'react-router-dom'
import {FaUser, FaShoppingCart} from 'react-icons/fa'
const Nav = () => {
  return (
    <nav>
      <div><h1><Link>Shop</Link></h1></div>
      <input type="text" placeholder='Tìm kiếm sản phẩm'/>
      <div>
        <Link><FaUser/></Link>
        <Link >Đăng nhập /</Link>
        <Link >Đăng ký</Link>
      </div>
      <Link >
        <FaShoppingCart/>
         <div>Giỏ hàng</div>
      </Link>
    </nav>
  )
}

export default Nav