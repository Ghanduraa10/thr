import Navbar from "./navbar";
import {Outlet, Router} from 'react-router-dom'


function Layout(){
    return (
        <>
        <Navbar/>
        <Outlet />
        </>
    )
}

export default Layout;