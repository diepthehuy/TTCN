import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
const Header = ({ user,role }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3500/logout", {
        method: 'GET',
        credentials: 'include',
      })
      if (response.status === 204) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("fullname");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        localStorage.removeItem("role");
        window.location.reload();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <header>
      <div><h1><Link to="/">Shop</Link></h1></div>
      <div className='search'>
        <input type="text" placeholder='Tìm kiếm sản phẩm' />
        <Link><FaSearch /></Link>
      </div>
      <div style={{ position: "relative" }}>
        {user && <div onMouseEnter={() => setDropdownOpen(!dropdownOpen)} onMouseLeave={() => setDropdownOpen(!dropdownOpen)}><Link><FaUser />{user}</Link>
          {dropdownOpen && 
          <div className='dropdown'>
            <Link style={{ color: "black" }}>Tài khoản</Link>
            <Link style={{ color: "black" }}>Lịch sử đơn hàng</Link>
            <Link style={{ color: "black" }}>Sản phẩm yêu thích</Link>
            <Link style={{ color: "red" }} onClick={() => logout()}>Đăng xuất</Link>
          </div>
          }
        </div>}
        {!user && <>
          <Link to="login"><FaUser /></Link>
          <Link to="login">Đăng nhập /</Link>
          <Link to="register">Đăng ký</Link></>
        }
      </div>
      {role.Admin && 
        <Link to="/admin">Admin</Link>
      }
      <Link to="/cart">
        <FaShoppingCart />
        <div>Giỏ hàng</div>
      </Link>
    </header>
  )
}

export default Header