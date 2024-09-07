import React from "react";

const GalleryPage = () => {
  const images = [
    { src: "img/classes-1.jpg", alt: "Gallery Image 1", title: "Gallery Image 1" },
    { src: "img/classes-2.jpg", alt: "Gallery Image 2", title: "Gallery Image 2" },
    { src: "img/classes-3.jpg", alt: "Gallery Image 3", title: "Gallery Image 3" },
    { src: "img/classes-4.jpg", alt: "Gallery Image 4", title: "Gallery Image 4" },
    { src: "img/classes-5.jpg", alt: "Gallery Image 5", title: "Gallery Image 5" },
    { src: "img/classes-6.jpg", alt: "Gallery Image 6", title: "Gallery Image 6" }
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="container-xxl py-5 page-header position-relative mb-5">
        <div className="container py-5">
          <h1 className="display-2 text-white animated slideInDown mb-4">Our Gallery</h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Gallery</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Gallery Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-lg-4 col-md-6 mb-4 wow fadeIn" data-wow-delay={`${0.1 * (index + 1)}s`} key={index}>
                <div className="position-relative">
                  <img className="img-fluid w-100 rounded" src={image.src} alt={image.alt} style={{ objectFit: "cover", height: "300px" }} />
                  {/* <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center h-100 w-100 bg-dark bg-opacity-50 rounded">
                    <h5 className="text-white text-center">{image.title}</h5>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Gallery Section End */}
    </>
  );
};

export default GalleryPage;
