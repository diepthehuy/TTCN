import React from 'react'
import logoMOMO from '../img/momo.jpg'
import logoVNPAY from '../img/vnpay.jpg'
import logoVISA from '../img/visa.jpg'
import logoMASTERCARD from '../img/mastercard.jpg'
import logoTOPZONE from '../img/topzone.jpg'
import logoDIENMAYXANH from '../img/dienmayxanh.jpg'
import logoBACHHOAXANH from '../img/bachhoaxanh.jpg'
import logoNHATHUOCANKHANG from '../img/nhathuocankhang.jpg'
import logoAVAKID from '../img/avakid.jpg'
import logoVIECLAM from '../img/vieclam.jpg'
import logoERABLUE from '../img/erablue.jpg'
import logoTHOXANH from '../img/thoxanh.jpg'
import logoFACEBOOK from '../img/facebook.jpg'
import logoYOUTUBE from '../img/youtube.jpg'
import logoZALO from '../img/zalo.jpg'
import logoCHUNGNHAN1 from '../img/chungnhan1.jpg'
import logoCHUNGNHAN2 from '../img/chungnhan2.jpg'
import logoCHUNGNHAN3 from '../img/chungnhan3.jpg'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__payments">
        <img src={logoMOMO} alt="MoMo" />
        <img src={logoVNPAY} alt="VNPay" />
        <img src={logoVISA} alt="Visa" />
        <img src={logoMASTERCARD} alt="Mastercard" />
        <span>và nhiều hình thức thanh toán khác</span>
      </div>

      <div className="footer__content">
        <div className="footer__column">
          <h3>Tổng đài hỗ trợ</h3>
          <p>Gọi mua: <a href="tel:1900232460">1900 232 460</a> (8:00 - 21:30)</p>
          <p>Khiếu nại: <a href="tel:18001062">1800.1062</a> (8:00 - 21:30)</p>
          <p>Bảo hành: <a href="tel:1900232464">1900 232 464</a> (8:00 - 21:00)</p>
        </div>

        <div className="footer__column">
          <h3>Về công ty</h3>
          <p>Giới thiệu công ty (MWG.vn)</p>
          <p>Tuyển dụng</p>
          <p>Gửi góp ý, khiếu nại</p>
          <p>Tìm siêu thị (2.963 shop)</p>
        </div>

        <div className="footer__column">
          <h3>Thông tin khác</h3>
          <p>Tích điểm Quà tặng VIP</p>
          <p>Lịch sử mua hàng</p>
          <p>Đăng ký bán hàng CTV chiết khấu cao</p>
          <p>Tìm hiểu về mua trả chậm</p>
          <p>Chính sách bảo hành</p>
        </div>

        <div className="footer__column footer__brands">
          <h3>Website cùng tập đoàn</h3>
          <div className="brand-grid">
            <a href="https://www.amazon.com/stores/TOPZONE/%E4%B8%BB%E9%A1%B5/page/67DDA7A2-F265-41A6-ACD8-D7F48573C45E"><img src={logoTOPZONE} alt="TopZone" /></a>
            <a href="https://www.dienmayxanh.com/"><img src={logoDIENMAYXANH} alt="Điện máy Xanh" /></a>
            <a href="https://www.bachhoaxanh.com/"><img src={logoBACHHOAXANH} alt="Bách hóa Xanh" /></a>
            <a href="https://www.nhathuocankhang.com/"><img src={logoNHATHUOCANKHANG} alt="Nhà thuốc An Khang" /></a>
            <a href="https://www.avakids.com/"><img src={logoAVAKID} alt="AVAKids" /></a>
            <a href=""><img src={logoVIECLAM} alt="Việc Làm" /></a>
            <a href="https://www.erablue.id/"><img src={logoERABLUE} alt="Erablue" /></a>
            <a href=""><img src={logoTHOXANH} alt="Thợ Xanh" /></a>
          </div>

          <div className="footer__social">
              
            <span>
              <img src={logoFACEBOOK} alt="" />
              3886.8k Fan
              </span>
            <span>
              <img src={logoYOUTUBE} alt="" />
              875k Đăng ký</span>
            <span>
              <img src={logoZALO} alt="" />
              Zalo TGDĐ</span>
          </div>

          <div className="footer__certs">
            <img src={logoCHUNGNHAN1} alt="Chứng nhận 1" />
            <img src={logoCHUNGNHAN2} alt="DMCA" />
            <img src={logoCHUNGNHAN3} alt="Protected" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer