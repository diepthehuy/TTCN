import React from 'react'

const FormHang = ({productBrand,setProductBrand, setError, setErrorMessage}) => {

   const validator = () => {
    if (!productBrand) {
      setError(true);
      setErrorMessage("Vui lòng điền đầy đủ thông tin");
      return false;
    } return true;
  }
  const add = async () => {
    if (validator() == false) return;
    const Brand ={TenHang:productBrand};
    try{
      const response = await fetch("http://localhost:3500/hang",{
        method:"POST",
        credentials:'include',
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
          'Content-Type': 'application/json' },
        body: JSON.stringify(Brand)
      });
      const data = await response.json();
      if(response.ok){
        setError(false);
        setErrorMessage(data.message);
      }else{
        setError(true);
        setErrorMessage(data.message);
      }
    }catch(err){
      console.log(err.message);
    }
  }

  return (
     <form onSubmit={(e) => { e.preventDefault() }}>
{/*         <input type="text" placeholder="Tên Sản Phẩm" required value={productName} onChange={(e) => { setProductName(e.target.value) }} />
        <input type="text" placeholder="Loại Thiết Bị" required value={productType} onChange={(e) => { setProductType(e.target.value) }} />
        <input type="text" placeholder="URL Ảnh" required value={imageURL} onChange={(e) => { setImageURL(e.target.value) }} />
        <textarea placeholder='Mô Tả Sản Phẩm' value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }} />
        <textarea placeholder='Thông Só kỹ thuật' value={productSpecs} onChange={(e) => { setProductSpecs(e.target.value) }} />
        <input type="text" placeholder='Số Lượng Sản Phẩm' value={productQuantity} onChange={(e) => { setProductQuantity(e.target.value) }} /> */}
        <input type="text" placeholder="Hãng" required value={productBrand} onChange={(e)=>{setProductBrand(e.target.value)} }/>
        <button onClick={add}>Submit</button>
      </form>
  )
}

export default FormHang