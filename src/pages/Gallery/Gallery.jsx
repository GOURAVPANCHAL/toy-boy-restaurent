import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// First 7 images from gallery
import foodmenu1 from "../../images/galary1.jpg";
import foodmenu2 from "../../images/galary2.jpg";
import foodmenu3 from "../../images/galary3.jpg";
import foodmenu4 from "../../images/galary4.jpg";
import foodmenu5 from "../../images/galary5.jpg";
import foodmenu6 from "../../images/galary6.jpg";
import foodmenu7 from "../../images/galary7.jpg";

// Next 19 images from food&drink
import foodmenu8 from "../../images/food&drink/foodDrink1.jpg";
import foodmenu9 from "../../images/food&drink/foodDrink2.jpg";
import foodmenu10 from "../../images/food&drink/foodDrink3.jpg";
import foodmenu11 from "../../images/food&drink/foodDrink4.jpg";
import foodmenu12 from "../../images/food&drink/foodDrink5.jpg";
import foodmenu13 from "../../images/food&drink/foodDrink6.jpg";
import foodmenu14 from "../../images/food&drink/foodDrink7.jpg";
import foodmenu15 from "../../images/food&drink/foodDrink8.jpg";
import foodmenu16 from "../../images/food&drink/foodDrink9.jpg";
import foodmenu17 from "../../images/food&drink/foodDrink10.jpg";
import foodmenu18 from "../../images/food&drink/foodDrink11.jpg";
import foodmenu19 from "../../images/food&drink/foodDrink12.jpg";
import foodmenu20 from "../../images/food&drink/foodDrink13.jpg";
import foodmenu21 from "../../images/food&drink/foodDrink14.jpg";
import foodmenu22 from "../../images/food&drink/foodDrink15.jpg";
import foodmenu23 from "../../images/food&drink/foodDrink16.jpg";
import foodmenu24 from "../../images/food&drink/foodDrink17.jpg";
import foodmenu25 from "../../images/food&drink/foodDrink18.jpg";
import foodmenu26 from "../../images/food&drink/foodDrink19.jpg";
import "../Gallery/gallery.css";
import { Helmet } from "react-helmet";

const Gallery = () => {
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
    foodmenu7,
    foodmenu8,
    foodmenu9,
    foodmenu10,
    foodmenu11,
    foodmenu12,
    foodmenu13,
    foodmenu14,
    foodmenu15,
    foodmenu16,
    foodmenu17,
    foodmenu18,
    foodmenu19,
    foodmenu20,
    foodmenu21,
    foodmenu22,
    foodmenu23,
    foodmenu24,
    foodmenu25,
    foodmenu26,
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
        <title>Gallery - ToyBoy India</title>
        <meta
          name="description"
          content="Explore our gallery of delicious food and drink items from ToyBoy India. Click on any image to view it in a larger format."
        />
        <meta property="og:title" content="Gallery - ToyBoy India" />
        <meta
          property="og:description"
          content="Explore our gallery of delicious food and drink items from ToyBoy India. Click on any image to view it in a larger format."
        />
        <meta property="og:image" content={images[0]} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toyboyindia.in/gallery" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="franchiseheading text-white text-center py-3">
        <h1 className="heading">Gallery</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-md-4 mb-3">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="img-thumbnail"
                onClick={() => openModal(index)}
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
    </>
  );
};

export default Gallery;
