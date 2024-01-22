import "../Styles/ContactUsStyles.css";

const ContactUs = () => {
  return (
    <div>
      <section>
        <div className="section-header">
          <div className="container">
            <h2>
              Contact <span style={{ color: "#0bb5e0" }}> Us</span>
            </h2>
            <p className="lead">
              We're friendly and available to chat. Reach out to us anytime and
              we'll be happy answer your questions.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="contact-info text">
              <div className="contact-info-item">
                <div className="contact-info-icon p-3 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-pin-map-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                </div>

                <div className="contact-info-content">
                  <h4>Address</h4>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8985174585014!2d77.72499707590217!3d12.978342214728753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fbbbc36817%3A0x1441e10c2bb64441!2sBHIVE%20Workspace%20Whitefield%20Campus!5e0!3m2!1sen!2sin!4v1703009564619!5m2!1sen!2sin"
                    style={{ color: "#ffffff", textDecoration:"none" }}
                  >
                    Jbr Tech Park, 6th Rd, Whitefield, EPIP Zone,
                    <br />
                    Whitefield, Bengaluru, Karnataka <br />
                    560066
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon p-3 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-telephone-outbound-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </div>

                <div className="contact-info-content color-white">
                  <h4>Phone</h4>
                  <a href="tel: +91 9035521136" className="text-white">+91 9035521136</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon p-3 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-envelope-at-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                  </svg>
                </div>

                <div className="contact-info-content">
                  <h4>Email</h4>
                  <a
                    className="col-6 text-white"
                    href="mailto: info@geeksmetrics.in"
                  >
                    info&#64;geeksmetrics.in
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form bg-transparent">
              <form action="" id="contact-form">
                <h2 className="text-white">Send Message</h2>
                <div className="input-box">
                  <input type="text" required name="" />
                  <span>Full Name</span>
                </div>

                <div className="input-box">
                  <input type="email" required name="" />
                  <span>Email</span>
                </div>

                <div className="input-box">
                  <textarea required name=""></textarea>
                  <span>Type your Message...</span>
                </div>

                <div className="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec py-5">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4 className="text-white">Find Us on Google Map</h4>

                <div className="map_bind">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8985174585014!2d77.72499707590217!3d12.978342214728753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fbbbc36817%3A0x1441e10c2bb64441!2sBHIVE%20Workspace%20Whitefield%20Campus!5e0!3m2!1sen!2sin!4v1703009564619!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    aria-hidden="false"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
