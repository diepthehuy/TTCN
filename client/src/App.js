import { useState,useEffect } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Missing from "./components/Missing";
import Login from "./components/Login";
import Password from "./components/Password";

function App() {
  const [user,setUser] = useState(null);
  const [password,setPassword] = useState(null);
  const [email,setEmail] = useState(null);
  const [fullname,setFullname] = useState(null);
  const [phone,setPhone] = useState(null);

  useEffect(()=>{

  },[]);

  return (
    <Routes>
      <Route path="/" element={<Layout user={user}/>}>
        <Route index element={<Home/>} />
        <Route path="register" element={<Register user={user} setUser={setUser} password={password} setPassword={setPassword} email={email} setEmail={setEmail} fullname={fullname} setFullname={setFullname} phone={phone} setPhone={setPhone}/>}/>
        <Route path="login" element={<Login user={user} email={email} password={password}/>}/>
        <Route path="password" element={<Password/>}/>
        <Route path="*" element={<Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
