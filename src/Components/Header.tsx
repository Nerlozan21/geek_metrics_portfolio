import { useEffect, useState } from "react";
import "../Styles/HeaderStyles.css";
import ProgressBar from "./ProgressBar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const isHeaderSticky = offset > 100;
      setIsSticky(isHeaderSticky);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${
        isSticky ? "sticky" : "" 
      }`}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand stickey-top d-flex align-items-center">
          <img
            src={"./Assets/Geeksmetrics-Logo-Png-File.png"}
            alt=""
            className="logo"
          />
        </a>
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link font-italic text-white">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a href="aboutUs" className="nav-link font-italic text-white">
                About
              </a>
            </li>
            <li className="nav-item active">
              <a href="contactUs" className="nav-link font-italic text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ProgressBar></ProgressBar>
    </nav>
  );
};

export default Header;

// import React from 'react'

// const Header = () => {
//   return (

//   )
// }

// export default Header
