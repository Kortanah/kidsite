import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel.css"; // Custom styles

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <Slider {...settings} className="header-carousel owl-carousel">
        <div className="carousel-item owl-carousel-item">
          <img className="img-fluid w-100" src="img/carousel-1.jpg" alt="Slide 1" />
          <div
            className="position-absolute bottom-0 w-100 d-flex align-items-center"
            style={{ background: "rgba(1, 29, 8, 0.559)", height: "100%" }}
          >
            <div className="container text-start">
            <h1 className="text-white mb-3 px-2 fade-in-up" >
              The Best Kindergarten <br/> School For Your Child
            </h1>
              <p className="fs-5 fw-medium text-white mb-3 px-2 pb-2 fade-in-up">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              </p>
              <a href="/" className="btn carousel-btn fade-in-up ">Learn More</a>
            </div>
          </div>
        </div>

        <div className="carousel-item owl-carousel-item">
          <img className="img-fluid w-100" src="img/carousel-2.jpg" alt="Slide 2" />
          <div
            className="position-absolute bottom-0 w-100 d-flex align-items-center"
            style={{ background: "rgba(1, 29, 8, 0.559)", height: "100%" }}
          >
            <div className="container text-start ">
              <h1 className="text-white mb-3 px-2 fade-in-up" >
                The Best Kindergarten <br/>School For Your Child
              </h1>
              <p className="fs-5 fw-medium text-white mb-3 pb-2 fade-in-up">
                Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
              </p>
              <a href="/" className="btn carousel-btn fade-in-up ">Explore Classes</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
