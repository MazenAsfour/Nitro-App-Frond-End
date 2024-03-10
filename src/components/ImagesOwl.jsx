import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ImagesOwl = () => {
  const options = {
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <OwlCarousel className=" team-carousel" {...options}>
            <div className="bg-light p-4 item">
              <img src="img/vendor-1.png" alt="" />
            </div>
            <div className="bg-light p-4 item">
              <img src="img/vendor-2.png" alt="" />
            </div>
            <div className="bg-light p-4 item">
              <img src="img/vendor-3.png" alt="" />
            </div>
            <div className="bg-light p-4 item">
              <img src="img/vendor-4.png" alt="" />
            </div>
            <div className="bg-light p-4 item">
              <img src="img/vendor-5.png" alt="" />
            </div>
            <div className="bg-light p-4 item">
              <img src="img/vendor-6.png" alt="" />
            </div>
            <div className="bg-light p-4 item">
              <img src="img/vendor-7.png" alt="" />
            </div>
            <div className="bg-light p-4 item">
              <img src="img/vendor-8.png" alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default ImagesOwl;
