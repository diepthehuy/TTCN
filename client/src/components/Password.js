import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { useState } from 'react';
import Confirm from './Confirm';


const Password = () => {
    const [comfirmPassword, setConfirmPassword] = useState("");
    const [userReset, setUserReset] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [page, setPage] = useState(true);

    const validator = () => {
        if (!userReset || !newPassword || !comfirmPassword) {
            setError(true);
            setErrorMessage("Vui lòng điền đầy đủ thông tin");
            return false;
        }
        else if (newPassword !== comfirmPassword) {
            setError(true);
            setErrorMessage("Mật khẩu không khớp");
            return false;
        } return true;
    }

    const reset = async () => {
        if (validator() === false) return;
        let resetInfo={};
        if(userReset.includes("@gmail.com")) resetInfo={email:userReset,password : newPassword};
        else resetInfo={username:userReset,password : newPassword};
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
                setPage(false);
                setError(false);
            } else if (response.status === 400 || response.status === 409) {
                setError(true);
                setErrorMessage(data.message);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <section className='form'>
            {page && <>
                <div >
                    <div>
                        <h1>Đặt lại mật khẩu</h1>
                    </div>
                    <div>
                        <p>Bạn vui lòng hoàn tất các thông tin xác thực bên dưới để chúng tôi đặt lại mật khẩu cho tài khoản của bạn.</p>
                    </div>
                    {error &&
                        <form onSubmit={(e) => { e.preventDefault(); }}>
                            <input type="text" placeholder='Email hoặc tên đăng nhập' value={userReset} onChange={(e) => { setUserReset(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
                            <input type="password" placeholder='Mật khẩu' value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
                            <input type="password" placeholder='Mật khẩu mới' value={comfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} style={{ borderColor: "red", outlineColor: "red" }} />
                            <button type='submit' onClick={reset}>Đặt lại mật khẩu</button>
                        </form>
                    }
                    {!error &&
                        <form onSubmit={(e) => { e.preventDefault(); }}>
                            <input type="email" placeholder='Email hoặc tên đăng nhập' value={userReset} onChange={(e) => { setUserReset(e.target.value) }} />
                            <input type="password" placeholder='Mật khẩu' value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} />
                            <input type="password" placeholder='Mật khẩu mới' value={comfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                            <button type='submit' onClick={reset}>Đặt lại mật khẩu</button>
                        </form>
                    }
                    <p style={{ color: "red" }}>{errorMessage}</p>
                    <Link to="/login"><FaAngleLeft />Quay lại trang đăng nhập</Link>
                </div>
            </>
            }
            {!page &&
                <Confirm setPage={setPage} userReset={userReset} newPassword={newPassword} />
            }
            <img src="https://cdn.divineshop.vn/static/c92dc142033ca6a66cda62bc0aec491b.svg" alt="" />
        </section>
    )
}

export default Password