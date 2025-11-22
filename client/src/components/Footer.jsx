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
        <img src='data:image/png;base64,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' alt="MoMo" />
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