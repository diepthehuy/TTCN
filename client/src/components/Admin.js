import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser,FaShoppingBag } from 'react-icons/fa'

const Admin = () => {
  const [productName,setProductName] = useState("");

  return (
    <main>
      <section className='Management'>
          <div>
              <ul>
                <li><Link><FaShoppingBag/> Quản Lý Sản Phẩm</Link></li>
                <li><Link><FaUser/> Quản Lý Tài Khoản</Link></li>
              </ul>
          </div>
          <div>
            <h2>Quản lý Sản Phẩm</h2>
            <form onSubmit={(e)=>{e.preventDefault()}}>
              <input type="text"  />
            </form>
          </div>
      </section>
    </main>
  )
}

export default Admin