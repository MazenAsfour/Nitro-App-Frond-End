// Inside Home component
import React from "react";
import AboutSection from "../components/AboutSection";
import VendorSection from "../components/VendorSection";
import MeetTeamOwl from "../components/MeetTeamOwl";
import Testmonial from "../components/Testmonial";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import ImagesOwl from "../components/ImagesOwl";
const Home = () => {
  return (
    <div>
      <div className="container-fluid p-0" style={{ marginBottom: "90px" }}>
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    Rent A Car
                  </h4>
                  <h1 className="display-1 text-white mb-md-4">
                    Best Rental Cars In Your Location
                  </h1>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    Rent A Car
                  </h4>
                  <h1 className="display-1 text-white mb-md-4">
                    Quality Cars with Unlimited Miles
                  </h1>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
      <ServicesSection />
      <AboutSection />

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-banner py-5 px-4 text-center">
            <div className="py-5">
              <h1 className="display-1 text-uppercase text-primary mb-4">
                50% OFF
              </h1>
              <h1 className="text-uppercase text-light mb-4">
                Special Offer For New Members
              </h1>
              <p className="mb-4">
                Only for Sunday from 1st Jan to 30th Jan 2045
              </p>
              <a className="btn btn-primary mt-2 py-3 px-5" href="">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-1 text-primary text-center">03</h1>
          <h1 className="display-4 text-uppercase text-center mb-5">
            Find Your Car
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="img/car-rent-1.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item active mb-4">
                <img
                  className="img-fluid mb-4"
                  src="img/car-rent-2.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="img/car-rent-3.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="img/car-rent-4.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="img/car-rent-5.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="img/car-rent-6.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="">
                  $99.00/Day
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MeetTeamOwl />
      <VendorSection />
      <Testmonial />
      <ContactSection />
      <ImagesOwl />
    </div>
  );
};

export default Home;
