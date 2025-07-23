import React, { useEffect, useState } from "react";
import bhopalVideo from "../../images/bengaloreVideo.mp4";

import ambiance1 from "../../images/banglore/toyboy-bengalore1.jpg";
import ambiance2 from "../../images/banglore/toyboy-bengalore2.jpg";
// import ambiance3 from "../../images/banglore/toyboy-bengalore3.jpg";
import ambiance4 from "../../images/banglore/toyboy-bengalore4.jpg";
// import ambiance5 from "../../images/banglore/toyboy-bengalore6.jpg";
import ambiance6 from "../../images/banglore/toyboy-bengalore6.jpg";
import ambiance7 from "../../images/banglore/toyboy-bengalore7.jpg";
import ambiance8 from "../../images/banglore/toyboy-bengalore8.jpg";
import ambiance9 from "../../images/banglore/toyboy-bengalore9.jpg";
import { Helmet } from "react-helmet";
const ToyBoyBangalore = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const images = [
    ambiance1,
    ambiance2,
    // ambiance3,
    ambiance4,
    // ambiance5,
    ambiance6,
    ambiance7,
    ambiance8,
    ambiance9,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Helmet >
        <title>ToyBoy Bangalore - About Us</title>
        <meta name="description" content="Discover ToyBoy Bangalore, a culinary haven in Bangalore offering a blend of traditional and contemporary flavors. Explore our ambiance and food offerings." />
        <meta name="keywords" content="ToyBoy, Bangalore, culinary, restaurant, ambiance, food, video" />
        <meta property="og:title" content="ToyBoy Bangalore - About Us" />
        <meta property="og:description" content="Discover ToyBoy Bangalore, a culinary haven in Bangalore offering a blend of traditional and contemporary flavors. Explore our ambiance and food offerings." />
        <meta property="og:image" content={ambiance1} />
        <meta property="og:url" content="https://yourwebsite.com/toyboy-bangalore" />
        <meta name="twitter:title" content="ToyBoy Bangalore - About Us" />
        <meta name="twitter:description" content="Discover ToyBoy Bangalore, a culinary haven in Bangalore offering a blend of traditional and contemporary flavors. Explore our ambiance and food offerings." />
        <meta name="twitter:image" content={ambiance1} />
      </Helmet>
      <div>
        <div className="container">
          <div className="text-center py-5 m-auto">
            <h1 className="food_drink_heading text-white">
              About ToyBoy Bengalore
            </h1>
            <h5 className="description text-white">
              Nestled in the heart of Bengalore, ToyBoy is a culinary heaven where
              time-honored recipes meet contemporary flair. Our passion for food
              runs deep, and every dish we serve tells a story of tradition,
              innovation, and a commitment to excellence. Step into our world and
              experience the flavors that have been delighting palates for
              generations.
            </h5>
          </div>

          <div className="container my-5">
            <div className="video-container">
              <video
                className="w-100"
                height={"100%"}
                controls
                src={bhopalVideo}
                alt="Toy Boy Bhopal Video"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <h1 className="text-center mb-3 mt-5" style={{ color: 'green' }}>Ambiance</h1>
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="img-thumbnail"
                  onClick={() => openModal(index)}
                  style={{ cursor: 'pointer', padding: '0', border: 'none', height: '100%', width: '100%' }}
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="gallery-modal modal show d-block" tabIndex="-1" role="dialog">
              <div className="gallery-modal-dialog modal-lg" role="document">
                <div className="gallery-modal-content">
                  <div className="gallery-modal-header">
                    <button type="button" className="gallery-modal-close" onClick={closeModal} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="gallery-modal-body">
                    <img src={images[currentIndex]} alt="Modal" className="img-fluid" />
                  </div>
                  <div className="gallery-modal-footer">
                    <button type="button" className="gallery-modal-button gallery-modal-prev" onClick={showPrevImage}>
                      Previous
                    </button>
                    <button type="button" className="gallery-modal-button gallery-modal-next" onClick={showNextImage}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <section id="instagram-feed" className="container py-5">
          <h2 className="mb-4 text-center text-white food_drink_heading">𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝕱𝖊𝖊𝖉</h2>
          <div
            className="elfsight-app-28e20741-4d23-4b59-b5f2-6fa0c4a94289"
            data-elfsight-app-lazy
          ></div>
        </section>
      </div>
    </>
  );
};

export default ToyBoyBangalore;
