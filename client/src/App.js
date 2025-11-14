import { useState,useEffect } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Missing from "./components/Missing";
import Login from "./components/Login";
import Password from "./components/Password";

function App() {

  useEffect(()=>{

  },[]);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="password" element={<Password/>}/>
        <Route path="*" element={<Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
