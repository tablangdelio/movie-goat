
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            { children }
            <Outlet />
        </>
      
    );
   
}

export default Layout;