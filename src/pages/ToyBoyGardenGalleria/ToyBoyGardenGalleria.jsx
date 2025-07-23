import React, { useEffect, useState } from "react";
import bhopalVideo from '../../images/toyboygardengaleria.mp4'
import '../RubruBhopal/ruburru.css'
import Reservation from "../../components/Reservation/Reservation";
import ambiance1 from "../../images/toyboygaleria/toyBoyGalleria1.jpg";
import ambiance2 from "../../images/toyboygaleria/toyBoyGalleria2.jpg";
import ambiance3 from "../../images/toyboygaleria/toyBoyGalleria3.jpg";
import ambiance4 from "../../images/toyboygaleria/toyBoyGalleria4.jpg";
import ambiance5 from "../../images/toyboygaleria/toyBoyGalleria5.jpg";
import { Helmet } from "react-helmet";
const ToyBoyGardenGalleria = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const images = [
    ambiance1, ambiance2, ambiance3, ambiance4, ambiance5];
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
      <Helmet>
        <title>ToyBoy Garden Galleria - About Us</title>
        <meta name="description" content="Explore ToyBoy Garden Galleria, an oasis of taste and tranquility in Garden Galleria Mall. Discover our unique ambiance and culinary delights." />
        <meta name="keywords" content="ToyBoy, Garden Galleria, ambiance, culinary delights, restaurant, video, gallery" />
        <meta property="og:title" content="ToyBoy Garden Galleria - About Us" />
        <meta property="og:description" content="Explore ToyBoy Garden Galleria, an oasis of taste and tranquility in Garden Galleria Mall. Discover our unique ambiance and culinary delights." />
        <meta property="og:image" content={ambiance1} />
        <meta property="og:url" content="https://yourwebsite.com/toyboy-garden-galleria" />
        <meta name="twitter:title" content="ToyBoy Garden Galleria - About Us" />
        <meta name="twitter:description" content="Explore ToyBoy Garden Galleria, an oasis of taste and tranquility in Garden Galleria Mall. Discover our unique ambiance and culinary delights." />
        <meta name="twitter:image" content={ambiance1} />
      </Helmet>
      <div>
        <div className="container">
          <div className="text-center py-5 m-auto">
            <h1 className="food_drink_heading text-white">
              About Toy Boy Garden Galleria
            </h1>
            <h6 className="description text-white">
              Discover an oasis of taste and tranquility amidst the vibrant hub of Garden Galleria Mall. Step into our world, where culinary delights and relaxation unite in perfect harmony.
            </h6>
          </div>
        </div>

        {/* New div with video */}
        <div className="container my-5">
          <div className="video-container">
            <video
              className="w-100"
              height={'100%'}
              controls
              src={bhopalVideo}
              alt="Toy Boy Bhopal Video"
            />
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
          <h2 className="food_drink_heading text-white mb-4 text-center">𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝕱𝖊𝖊𝖉</h2>
         <div
        className="elfsight-app-333ebeff-fe02-494e-814a-5bfa1fec042f"
        data-elfsight-app-lazy
      ></div>
        </section>
        <Reservation />

      </div>
    </>
  );
};

export default ToyBoyGardenGalleria;
