import React from "react";
import BusinessInfo from "../businessInfo/BusinessInfo";
import HeaderMain from "../headerMain/HeaderMain";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div id='header-container'>
      <Navbar />
      <HeaderMain />
      <BusinessInfo />
    </div>
  );
};

export default Header;
