import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header /> 
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Layout