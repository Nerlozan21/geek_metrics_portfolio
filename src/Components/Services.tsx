import React from "react";

const Services = () => {
  return (
    <div className="container py-5">
      <h1 className="text-white">
        Our <span style={{ color: "#5535f0" }}>Services</span>
      </h1>
      <p className="lead">
        GeekMetrics is the ultimate digital emporium catering to the best
        service requirements of the clients. Experience yourself with our
        remarkable services.
      </p>

      <div className="row featurette">
        <div className="col-md-7 py-5">
          <h2 className="featurette-heading text-white">Custom Software Development</h2>
          <p className="lead">
            Tailor-made solutions for your unique needs - our custom software
            brings your vision to life.
          </p>
        </div>
        <div className="col-md-5 justify-content-center">
          <img
            src="./Assets/grapy-coder-workplace.png"
            alt=""
            width="250"
            height="250"
            className="p-0"
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5 order-md-2 py-5">
          <h2 className="featurette-heading text-white">CRM solutions</h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-7 order-md-1 justify-content-center">
          <img
            src="./Assets/office-business-planning-and-developing-strategy.png"
            alt=""
            width="250"
            height="250"
            className="p-0"
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7 py-5">
          <h2 className="featurette-heading text-white">Human Resource Management</h2>
          <p className="lead">
            Simplify human resource management and empower your workforce with
            our HRM software.
          </p>
        </div>
        <div className="col-md-5 justify-content-center">
          <img
            src="./Assets/glare-coding-programming-languages-1.png"
            alt=""
            width="250"
            height="250"
            className="p-0"
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5 order-md-2 py-5">
          <h2 className="featurette-heading text-white">Accounting solutions</h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-7 order-md-1 justify-content-center">
          <img src="./Assets/accounting.png" alt="" width="250" height="250" className="p-0"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
