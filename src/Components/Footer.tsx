import React from "react";
import "../Styles/FooterStyles.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="heading">
          <h2>
            GeekMetrics<sup>&trade;</sup>
          </h2>
        </div>
        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p>
              <a href="#">App development</a>
            </p>
            <p>
              <a href="#">Web development</a>
            </p>
            <p>
              <a href="#">DevOps</a>
            </p>
            <p>
              <a href="#">Web designing</a>
            </p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p>
              <a href="#">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fab fa-github"></i> Github
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fab fa-codepen"></i> Codepen
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </p>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div className="details">
            <h4 className="address">Address</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Cupiditate, qui!
            </p>
            <h4 className="mobile">Mobile</h4>
            <p>
              <a href="#">+9112233445</a>
            </p>
            <h4 className="mail">Email</h4>
            <p>
              <a href="#">abcdefgmail.com</a>
            </p>
          </div>
        </div>
        <footer>
          <hr />
          &copy; {new Date().getFullYear()} GeekMetrics Technologies Pvt. Ltd.
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
