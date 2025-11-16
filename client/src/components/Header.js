import React, { use, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
const Header = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);


  return (
    <header>
      <div><h1><Link to="/">Shop</Link></h1></div>
      <div className='search'>
        <input type="text" placeholder='Tìm kiếm sản phẩm' />
        <Link><FaSearch /></Link>
      </div>
      <div style={{ position: "relative" }}>
        {user && <div onClick={()=>{setDropdownOpen(!dropdownOpen)}}><Link><FaUser />{user}</Link>
          {dropdownOpen && <div className='dropdown'>
            <button style={{color:"red"}}>Đăng xuất</button>
          </div>
          }
         </div>}
        {!user && <>
          <Link to="login"><FaUser /></Link>
          <Link to="login">Đăng nhập /</Link>
          <Link to="register">Đăng ký</Link></>
        }
      </div>
      <Link >
        <FaShoppingCart />
        <div>Giỏ hàng</div>
      </Link>
    </header>
  )
}

export default Header