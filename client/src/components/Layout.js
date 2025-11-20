import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from 'react-router-dom';

const Layout = ({user,role}) => {
  return (
    <div>
      <Header user={user} role={role}/> 
      <Nav />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Layout