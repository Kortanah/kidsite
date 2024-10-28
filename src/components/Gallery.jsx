import React, { useEffect, useState } from "react";

// Sample image data (replace with your actual image URLs and titles)
const sampleImages = [
  { id: 1, imageUrl: "img/classes-1.jpg", title: "Image 1" },
  { id: 2, imageUrl: "img/classes-2.jpg", title: "Image 2" },
  { id: 3, imageUrl: "img/classes-3.jpg", title: "Image 3" },
  { id: 4, imageUrl: "img/classes-4.jpg", title: "Image 4" },
  { id: 5, imageUrl: "img/classes-.jpg", title: "Image 5" },
  { id: 6, imageUrl: "img/classes-1.jpg", title: "Image 6" },
];

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  // Set sample images in state
  useEffect(() => {
    const fetchImages = () => {
      setImages(sampleImages); // Set the static array as the images
    };

    fetchImages();
  }, []);

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
              <div className="col-lg-4 col-md-6 mb-4 wow fadeIn" data-wow-delay={`${0.1 * (index + 1)}s`} key={image.id}>
                <div className="position-relative">
                  <img
                    className="img-fluid w-100 rounded"
                    src={image.imageUrl}
                    alt={image.title || `Gallery Image ${index + 1}`}
                    style={{ objectFit: "cover", height: "300px" }}
                  />
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
