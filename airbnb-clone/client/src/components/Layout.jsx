import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import {Header2} from '../Navbar/components/Header/index'

const Layout = () => {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      {/* <Header2/> */}
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
