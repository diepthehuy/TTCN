import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from 'react-router-dom';

const Layout = ({user}) => {
  return (
    <div>
      <Header user={user}/> 
      <Nav />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Layout