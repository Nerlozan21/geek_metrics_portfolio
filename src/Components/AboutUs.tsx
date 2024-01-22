import "../Styles/AboutUsStyles.css";
import ProjectsModal from "./ProjectsModal";

const AboutUs = () => {
  return (
    <div>
      <div className="text-white">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4 text-white">
                GeeksMetrics Solutions Private Ltd.
              </h1>
              <p className="lead mb-0">
                Technology is best when it brings people together. The
                importance of IT management is to understand the managing data.
                There are also difficulties IT managers overcome.
              </p>
              <p className="lead"></p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid abtimg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light text-white">Mission</h2>
              <p className="font-italic mb-4 fs-5">
                GeeksMetrics care of every aspect of endpoint and user security
                in the most detailed way, as well as easily implements it. The
                dependence between user, device, and corporate data is
                systematically aligned to provide the best security and control
                needed to manage enterprise endpoints under one console. With a
                technology that is future-proof and edging towards complete
                automation and hands-free management, GeeksMetrics continues to
                make businesses secure.
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0 abtimg"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0 abtimg"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light text-white">Vision</h2>
              <p className="mb-4 fs-5">
                Businesses always adopt new technologies to enhance work and
                productivity. When technologies change at a rapid pace,
                businesses require a solution that adapts to these frequent
                changes for managing the corporate endpoints and data. Being a
                security management solution, GeeksMetrics understands the risks
                and requirements of enterprises to utilize an encompassing
                platform that covers all security bases. GeeksMetrics helps
                close the gap between the mobile endpoints and IT, plus makes
                security and management of endpoints simple.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light text-white">
                Our <span style={{ color: "#0bb5e0" }}>Team</span>
              </h2>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-sm py-5 px-4 bg-white">
                <img
                  src="./Assets/Hussen.jpg"
                  alt=""
                  width=""
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0 bg-white">Syed Janath Hussen</h5>
                <span className="small text-uppercase bg-white text-black">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 bg-white">
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-facebook-f text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-twitter text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-instagram bg-white text-black"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-linkedin bg-white text-black"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-sm py-5 px-4 bg-white">
                <img
                  src="./Assets/COfounder.jfif"
                  alt=""
                  width=""
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0 bg-white">Syed Khadar Basha</h5>
                <span className="small text-uppercase bg-white text-black">
                  CO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 bg-white">
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-facebook-f text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-twitter text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-instagram bg-white text-black"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-linkedin bg-white text-black"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-sm py-5 px-4 bg-white">
                <img
                  src="./Assets/supportmale-svgrepo-com.svg"
                  alt=""
                  width=""
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0 bg-white">Pratham</h5>
                <span className="small text-uppercase bg-white text-black">
                  CTO
                </span>
                <ul className="social mb-0 list-inline mt-3 bg-white">
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-facebook-f text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-twitter text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-instagram bg-white text-black"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-linkedin bg-white text-black"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-sm py-5 px-4 bg-white">
                <img
                  src="./Assets/sajith.jfif"
                  alt=""
                  width=""
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0 bg-white">Sajith Krishnan</h5>
                <span className="small text-uppercase bg-white text-black">
                  Business Assosciate
                </span>
                <ul className="social mb-0 list-inline mt-3 bg-white">
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-facebook-f text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-twitter text-black bg-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-instagram bg-white text-black"></i>
                    </a>
                  </li>
                  <li className="list-inline-item bg-white">
                    <a href="#" className="social-link bg-white">
                      <i className="fa fa-linkedin bg-white text-black"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="container py-2">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light text-white">
                Projects
              </h2>
            </div>

            <div className="row text-center justify-content-center">
              <div
                className="animate__animated animate bounce card m-4"
                style={{ width: "18rem" }}
              >
                <div className="container mt-3">
                  <img
                    src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
                    className="card-img-top bg-white"
                    alt="..."
                  />
                </div>
                <div className="card-body bg-white">
                  <h5 className="card-title ms-1 bg-white">Food Application</h5>
                  <p className="card-text mb-5 ms-1 bg-white">
                    See more bootstrap code snippets on my application
                  </p>
                  <ProjectsModal></ProjectsModal>
                </div>
              </div>
              <div
                className="animate__animated animate bounce card m-4"
                style={{ width: "18rem" }}
              >
                <div className="container mt-3">
                  <img
                    src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
                    className="card-img-top bg-white"
                    alt="..."
                  />
                </div>
                <div className="card-body bg-white">
                  <h5 className="card-title ms-1 bg-white">Shopping Application</h5>
                  <p className="card-text mb-5 ms-1 bg-white">
                    See more bootstrap code snippets on my application
                  </p>
                  <ProjectsModal></ProjectsModal>
                </div>
              </div>
              <div
                className="animate__animated animate bounce card m-4"
                style={{ width: "18rem" }}
              >
                <div className="container mt-3">
                  <img
                    src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
                    className="card-img-top bg-white"
                    alt="..."
                  />
                </div>
                <div className="card-body bg-white">
                  <h5 className="card-title ms-1 bg-white">
                    Portfolio Application
                  </h5>
                  <p className="card-text mb-5 ms-1 bg-white">
                    Simple Protfolio application for customer
                  </p>
                  <ProjectsModal></ProjectsModal>
                </div>
              </div>
              <div
                className="animate__animated animate bounce card m-4"
                style={{ width: "18rem" }}
              >
                <div className="container mt-3">
                  <img
                    src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
                    className="card-img-top bg-white"
                    alt="..."
                  />
                </div>
                <div className="card-body bg-white">
                  <h5 className="card-title ms-1 bg-white">
                    Matrimony Application
                  </h5>
                  <p className="card-text mb-5 ms-1 bg-white">
                    Matrimony Application for customer
                  </p>
                  <ProjectsModal></ProjectsModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
