import React from "react";

const Services = () => {
  return (
    <div className="container py-5">
      <h1 className="text-white">
        Our <span style={{ color: "#0bb5e0" }}>Services</span>
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
            brings your vision to life. Developing software or an application that meets specific business requirements is necessary for survival in today’s competitive era. 
            Custom Software Development is the process of conceptualizing, designing, building and deploying software for a specific individual or a group of individuals within an organization or as a third-party arrangement
          </p>
        </div>
        <div className="col-md-5 justify-content-center">
          <img
            src="./Assets/grapy-coder-workplace.png"
            alt=""
            width="250"
            height="250"
            className="p-0 imgcard"
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5 order-md-2 py-5">
          <h2 className="featurette-heading text-white">CRM Solutions</h2>
          <p className="lead">
          CRM system gives everyone from sales, customer service, business development, recruiting, marketing, or any other line of business. A better way to manage the external interactions and relationships that drive success. CRM software lets you store customer and prospect contact information, identify sales opportunities, record service issues, and manage marketing campaigns, all in one central location and make information about every customer interaction available to anyone at your company who might need it.
          </p>
        </div>
        <div className="col-md-7 order-md-1 justify-content-center">
          <img
            src="./Assets/office-business-planning-and-developing-strategy.png"
            alt=""
            width="250"
            height="250"
            className="p-0 imgcard"
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7 py-5">
          <h2 className="featurette-heading text-white">Human Resource Management</h2>
          <p className="lead">
            Simplify human resource management and empower your workforce with
            our HRM software. Human resources software is used by businesses to combine a number of necessary HR functions, such as storing employee data, managing payroll, recruitment, benefits administration (total rewards), time and attendance, employee performance management, and tracking competency and training records.
          </p>
        </div>
        <div className="col-md-5 justify-content-center">
          <img
            src="./Assets/glare-coding-programming-languages-1.png"
            alt=""
            width="250"
            height="250"
            className="p-0 imgcard"
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5 order-md-2 py-5">
          <h2 className="featurette-heading text-white">Accounting Solutions</h2>
          <p className="lead">
          Accounting software manages and records the day-to-day financial transactions of an organization, including fixed asset management, expense management, revenue management, accounts receivable, accounts payable, subledger accounting, and reporting and analytics. A complete accounting system keeps track of an organization’s assets, liabilities, revenues, and expenses.
          </p>
        </div>
        <div className="col-md-7 order-md-1 justify-content-center">
          <img src="./Assets/accounting.png" alt="" width="250" height="250" className="p-0 imgcard"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
