import { use, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaShoppingBag } from 'react-icons/fa'
import { MdAnalytics } from 'react-icons/md'
import FormHang from './FormHang'

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSpecs, setProductSpecs] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productQuantity, setProductQuantity] = useState();
  const [productType, setProductType] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageURL, setImageURL] = useState("");


  return (
    <main>
      <section className='Management'>
        <div>
          <ul>
            <li><Link style={{ color: "black" }}><FaShoppingBag /> Quản Lý Sản Phẩm</Link></li>
            <li><Link><FaUser /> Quản Lý Tài Khoản</Link></li>
            <li><Link><MdAnalytics /> Thống kê</Link></li>
          </ul>
        </div>
        <div>
          <div>
            <h2>Quản lý Sản Phẩm</h2>
          </div>
          <div>
            <FormHang productBrand={productBrand} setProductBrand={setProductBrand} setError={setError} setErrorMessage={setErrorMessage}/>
          </div>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      </section>
    </main>
  )
}

export default Admin