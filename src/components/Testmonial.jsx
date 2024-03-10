import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testmonial = () => {
  const options = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-1 text-primary text-center">05</h1>
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Client's Say
          </h1>
          <OwlCarousel className="testimonial-carousel" {...options}>
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-1.jpg"
                  alt=""
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-2.jpg"
                  alt=""
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-3.jpg"
                  alt=""
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-4.jpg"
                  alt=""
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Testmonial;
