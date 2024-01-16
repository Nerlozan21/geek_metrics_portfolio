import "../Styles/FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer py-1">
      <hr />
      <div className="content">
        <div className="heading text-center">
          <img
            src={"./Assets/Geeksmetrics-Logo-Png-File.png"}
            alt="Geeksmetrics logo"
            width="120"
            height="120"
          />
        </div>
        <div className="services">
          <h3 className="mb-2 text-white">Services</h3>
          <p>App development</p>
          <p>Web development</p>
          <p>DevOps</p>
          <p>Web designing</p>
        </div>
        <div className="social-media">
          <h3 className="mb-2 text-white">Social</h3>
          <p>
            <a
              href="https://www.linkedin.com/company/geekmetrics/"
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin text-white"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://twitter.com/geeksmetrics" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x text-white "
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/geeksmetricssolutions/"
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-twitter-x text-white "
                id="instagram"
              >
                <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"></path>
              </svg>
              Instagram
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/channel/UCdAJtP_h3zpPn_waggNQc3g" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="youtube"
                width="16"
                height="16"
                className="bi bi-YouTube text-white"
                fill="currentColor"
              >
                <path d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z"></path>
              </svg>
              YouTube
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/home.php" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="facebook"
                width="16"
                height="16"
                className="bi bi-Facebook text-white"
                fill="currentColor"
              >
                <path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path>
              </svg>
              Facebook
            </a>
          </p>
        </div>
        <div className="links">
          <h3 className="mb-2 text-white">Quick links</h3>
          <p>
            <a href="/" className="text-white">
              Home
            </a>
          </p>
          <p>
            <a href="/aboutUs" className="text-white">
              About
            </a>
          </p>
          <p>
            <a href="/contactUs" className="text-white">
              Contact
            </a>
          </p>
        </div>
        <div className="details">
          <h3 className="address text-white">Address</h3>
          <p>
            Jbr Tech Park, 6th Rd, Whitefield,
            <br />
            EPIP Zone, Whitefield, Bengaluru, Karnataka 560066
          </p>
          <div className="row">
            <h4 className="mobile col-3 text-white">Mobile</h4>
            <p className="col-6">+91 9035521136</p>
          </div>
          <div className="row">
            <h4 className="mail col-3 text-white">Email</h4>
            <p className="col-6">info&#64;geeksmetrics.in</p>
          </div>
        </div>
      </div>
      <footer>
        <hr />
        &copy; 2023 GeekMetrics Solutions Pvt. Ltd.
      </footer>
    </div>
  );
};

export default Footer;
