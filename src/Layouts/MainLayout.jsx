import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 py-10 md:py-12 lg:py-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
