import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch,FaUser,FaShoppingCart} from 'react-icons/fa'
const Header = ({user}) => {
  return (
     <header>
        <div><h1><Link to="/">Shop</Link></h1></div>
      <div className='search'>
        <input type="text" placeholder='Tìm kiếm sản phẩm'/>
        <Link><FaSearch/></Link>
      </div>
      <div>
        {user && <p><Link to="login"><FaUser/></Link> {user}</p>}
        {!user && <>
        <Link to="login"><FaUser/></Link>
        <Link to="login">Đăng nhập /</Link>
        <Link to="register">Đăng ký</Link></>
        }
      </div>
      <Link >
        <FaShoppingCart/>
         <div>Giỏ hàng</div>
      </Link>
    </header>
  )
}

export default Header