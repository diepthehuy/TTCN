import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Missing from "./components/Missing";
import Login from "./components/Login";
import Password from "./components/Password";
import Admin from "./components/Admin";
import Cart from "./components/Cart"

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [role,setRole]= useState({});

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setUser(localStorage.getItem("username"));
      setFullname(localStorage.getItem("fullname"));
      setEmail(localStorage.getItem("email"));
      setPhone(localStorage.getItem("phone"));
      setRole(JSON.parse(localStorage.getItem("role")));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} role={role}/>}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register setRole={setRole} user={user} setUser={setUser} email={email} setEmail={setEmail} fullname={fullname} setFullname={setFullname} phone={phone} setPhone={setPhone}  />} />
        <Route path="login" element={<Login setRole={setRole} setUser={setUser} setFullname={setFullname} setPhone={setPhone} setEmail={setEmail} />} />
        <Route path="password" element={<Password />} />
        <Route path="admin" element={<Admin/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
