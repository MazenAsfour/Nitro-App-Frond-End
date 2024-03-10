import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MeetTeamOwl = () => {
  const options = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    navText: [
      '<div class="owl-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
      '<div class="owl-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    ],
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-1 text-primary text-center">04</h1>
          <h1 className="display-4 text-uppercase text-center mb-5">
            Meet Our Team
          </h1>
          <OwlCarousel className=" team-carousel" {...options}>
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default MeetTeamOwl;
