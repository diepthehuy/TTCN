import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Confirm = ({ setPage, userReset, newPassword }) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [confirmCode, setConfirmCode] = useState("");
    const navigate = useNavigate();

    const confirm = async () => {
        let resetInfo = {};
        if(userReset.includes("@gmail.com")) resetInfo = {email:userReset,newPassword :newPassword,resetCode: confirmCode };
        else resetInfo = {username:userReset,newPassword :newPassword,resetCode: confirmCode };
        try {
            const response = await fetch("http://localhost:3500/reset", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(resetInfo)
            });
            const data = await response.json();
            if (response.status === 200) {
                setErrorMessage("");
                setPage(true);
                setError(false);
                navigate("/login");
            } else if (response.status === 400 || response.status === 409) {
                setError(true);
                setErrorMessage(data.message);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <section className='form1'>
            <div>
                <div>
                    <h1>Xác nhận</h1>
                </div>
                <div>
                    <p>Bạn vui lòng hoàn tất các thông tin xác thực bên dưới để chúng tôi đặt lại mật khẩu cho tài khoản của bạn.</p>
                </div>
                {!error &&
                    <form onSubmit={(e) => { e.preventDefault(); }}>
                        <input type="text" maxLength="6" pattern="\d{6}" value={confirmCode} onChange={(e) => { setConfirmCode(e.target.value) }} />
                        <button onClick={confirm}>Xác Thực</button>
                    </form>
                }
                {error&&
                    <form onSubmit={(e) => { e.preventDefault(); }}>
                        <input type="text" maxLength="6" pattern="\d{6}" value={confirmCode} onChange={(e) => { setConfirmCode(e.target.value) }} style={{outlineColor:"red",borderColor:"red"}} />
                        <button onClick={confirm}>Xác Thực</button>
                    </form>
                }
                <p style={{ color: "red" }}>{errorMessage}</p>
                <Link to="/login"><FaAngleLeft />Quay lại trang đăng nhập</Link>
            </div>
        </section>
    )
}

export default Confirm