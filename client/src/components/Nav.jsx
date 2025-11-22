import React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown, FaList } from 'react-icons/fa'
const Nav = () => {
  return (
    <nav>
      <button><FaList/> Danh Sách Sản Phẩm</button>
      <button>Chọn khu vực xem ưu đãi <FaCaretDown/></button>
    </nav>
  )
}

export default Nav