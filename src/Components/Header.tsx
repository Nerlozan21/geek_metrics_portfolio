import { useEffect, useState } from "react";
import "../Styles/HeaderStyles.css";

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
    <nav className={`navbar navbar-expand-lg navbar-dark ${isSticky ? 'sticky' : ''}`}>
      <div className="container-fluid">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img
            src={"./Assets/Geeksmetrics-Logo-Png-File.png"}
            alt=""
            className="logo"
          />
        </a>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler text-light"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
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
    </nav>
  );
};

export default Header;
