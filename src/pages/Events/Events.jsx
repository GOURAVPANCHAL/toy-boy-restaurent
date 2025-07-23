import React, { useEffect, useState } from "react";
import "../RubruBhopal/ruburru.css";
import Reservation from "../../components/Reservation/Reservation";
import foodmenu1 from "../../images/galleria1.jpg";
import foodmenu2 from "../../images/galleria2.jpg";
import foodmenu3 from "../../images/galleria3.jpg";
import foodmenu4 from "../../images/galleria4.jpg";
import foodmenu5 from "../../images/galleria5.jpg";
import foodmenu6 from "../../images/galleria6.jpg";
import { Helmet } from "react-helmet";
const Events = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const images = [
    foodmenu1,
    foodmenu2,
    foodmenu3,
    foodmenu4,
    foodmenu5,
    foodmenu6,
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <>
    <Helmet>
        <title>ToyBoy Events | Special Events</title>
        <meta name="description" content="Join us at ToyBoy for special events and enjoy an amazing ambiance with great food and drinks." />
      </Helmet>
      <div>
        <div className="container">
          <div className="text-center py-5 m-auto">
            <h1 className="food_drink_heading text-white">Events</h1>
            <h6 className="description text-white">Special Events</h6>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* <h1 className="text-center mb-3 mt-5" style={{ color: "green" }}>
              Ambiance
            </h1> */}
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="img-thumbnail"
                  onClick={() => openModal(index)}
                  style={{
                    cursor: "pointer",
                    padding: "0",
                    border: "none",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="gallery-modal modal show d-block"
              tabIndex="-1"
              role="dialog"
            >
              <div className="gallery-modal-dialog modal-lg" role="document">
                <div className="gallery-modal-content">
                  <div className="gallery-modal-header">
                    <button
                      type="button"
                      className="gallery-modal-close"
                      onClick={closeModal}
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="gallery-modal-body">
                    <img
                      src={images[currentIndex]}
                      alt="Modal"
                      className="img-fluid"
                    />
                  </div>
                  <div className="gallery-modal-footer">
                    <button
                      type="button"
                      className="gallery-modal-button gallery-modal-prev"
                      onClick={showPrevImage}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="gallery-modal-button gallery-modal-next"
                      onClick={showNextImage}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Reservation />
      </div>
    </>
  );
};

export default Events;
