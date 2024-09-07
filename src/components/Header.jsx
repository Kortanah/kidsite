import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Carousel.css"; // Add custom styling if needed

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024, // For screen widths <= 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For screen widths <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screen widths <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Optionally remove dots for small screens
        },
      },
    ],
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <Slider {...settings} className="header-carousel owl-carousel">
        <div className="carousel-item owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel-1.jpg" alt="Slide 1" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(0, 0, 0, .2)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white mb-4">
                    The Best Kindergarten School For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">
                    Learn More
                  </a>
                  <a href="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel-2.jpg" alt="Slide 2" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(0, 0, 0, .2)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white mb-4">
                    Make A Brighter Future For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">
                    Learn More
                  </a>
                  <a href="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
