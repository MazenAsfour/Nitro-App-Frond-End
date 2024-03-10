import { React, useState } from "react";

const ServicesSection = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          {pathname == "/" ? (
            <>
              <h1 className="display-1 text-primary text-center">02</h1>
            </>
          ) : (
            ""
          )}
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Services
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-taxi text-secondary"></i>
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">01</h1>
                </div>
                <h4 className="text-uppercase mb-3">Car Rental</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit sea sed
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-money-check-alt text-secondary"></i>
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">02</h1>
                </div>
                <h4 className="text-uppercase mb-3">Car Financing</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit sea sed
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-car text-secondary"></i>
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">03</h1>
                </div>
                <h4 className="text-uppercase mb-3">Car Inspection</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit sea sed
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-cogs text-secondary"></i>
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">04</h1>
                </div>
                <h4 className="text-uppercase mb-3">Auto Repairing</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit sea sed
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-spray-can text-secondary"></i>
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">05</h1>
                </div>
                <h4 className="text-uppercase mb-3">Auto Painting</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit sea sed
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-pump-soap text-secondary"></i>
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">06</h1>
                </div>
                <h4 className="text-uppercase mb-3">Auto Cleaning</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit sea sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
