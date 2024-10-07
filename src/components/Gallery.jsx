import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  // Fetch image URLs from Firestore
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageCollectionRef = collection(db, "gallery"); // Firestore collection
        const imageSnapshot = await getDocs(imageCollectionRef);
        const imageList = imageSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(imageList); // Set the fetched images from Firestore as objects
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
      }
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
