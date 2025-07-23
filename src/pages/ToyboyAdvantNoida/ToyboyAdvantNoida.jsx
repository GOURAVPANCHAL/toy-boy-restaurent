import React, { useEffect, useState } from "react";
// import bhopalVideo from "../../images/bhopalvideo1.mp4";
import "../RubruBhopal/ruburru.css";
import Reservation from "../../components/Reservation/Reservation";
import Slider from "react-slick";
// food menu
import foodmenu1 from "../../images/banglore/food-menu/1.png";
import foodmenu2 from "../../images/banglore/food-menu/2.png";
import foodmenu3 from "../../images/banglore/food-menu/3.png";
import foodmenu4 from "../../images/banglore/food-menu/4.png";
import foodmenu5 from "../../images/banglore/food-menu/5.png";
import foodmenu6 from "../../images/banglore/food-menu/6.png";
import foodmenu7 from "../../images/banglore/food-menu/7.png";
import foodmenu8 from "../../images/banglore/food-menu/8.png";
import foodmenu9 from "../../images/banglore/food-menu/9.png";
import foodmenu10 from "../../images/banglore/food-menu/10.png";
import foodmenu11 from "../../images/banglore/food-menu/11.png";
import foodmenu12 from "../../images/banglore/food-menu/12.png";
import foodmenu13 from "../../images/banglore/food-menu/13.png";
import foodmenu14 from "../../images/banglore/food-menu/14.png";
import foodmenu15 from "../../images/banglore/food-menu/15.png";
import foodmenu16 from "../../images/banglore/food-menu/16.png";
import foodmenu17 from "../../images/banglore/food-menu/17.png";
import foodmenu18 from "../../images/banglore/food-menu/18.png";
import foodmenu19 from "../../images/banglore/food-menu/19.png";
// food menu end

// drink menu
import drinkmenu1 from "../../images/banglore/drinks-menu/1.png";
import drinkmenu2 from "../../images/banglore/drinks-menu/2.png";
import drinkmenu3 from "../../images/banglore/drinks-menu/3.png";
import drinkmenu4 from "../../images/banglore/drinks-menu/4.png";
import drinkmenu5 from "../../images/banglore/drinks-menu/5.png";
import drinkmenu6 from "../../images/banglore/drinks-menu/6.png";
import drinkmenu7 from "../../images/banglore/drinks-menu/7.png";
import drinkmenu8 from "../../images/banglore/drinks-menu/8.png";
import drinkmenu9 from "../../images/banglore/drinks-menu/9.png";
import drinkmenu10 from "../../images/banglore/drinks-menu/10.png";
import drinkmenu11 from "../../images/banglore/drinks-menu/11.png";
import drinkmenu12 from "../../images/banglore/drinks-menu/12.png";
import drinkmenu13 from "../../images/banglore/drinks-menu/13.png";
import drinkmenu14 from "../../images/banglore/drinks-menu/14.png";
// drink menu end

// ambiance image
import ambiance1 from "../../images/advantNoida/toyboyAdvant1.jpg";
import ambiance2 from "../../images/advantNoida/toyboyAdvant2.jpg";
import ambiance3 from "../../images/advantNoida/toyboyAdvant3.jpg";
import ambiance4 from "../../images/advantNoida/toyboyAdvant4.jpg";
import ambiance5 from "../../images/advantNoida/toyboyAdvant5.jpg";
import ambiance6 from "../../images/advantNoida/toyboyAdvant6.jpg";
import ambiance7 from "../../images/advantNoida/toyboyAdvant7.jpg";
import ambiance8 from "../../images/advantNoida/toyboyAdvant8.jpg";
import ambiance9 from "../../images/advantNoida/toyboyAdvant9.jpg";
import ambiance10 from "../../images/advantNoida/toyboyAdvant10.jpg";
import ambiance11 from "../../images/advantNoida/toyboyAdvant11.jpg";
import ambiance12 from "../../images/advantNoida/toyboyAdvant12.jpg";
import ambiance13 from "../../images/advantNoida/toyboyAdvant13.jpg";
import ambiance14 from "../../images/advantNoida/toyboyAdvant14.jpg";
import ambiance15 from "../../images/advantNoida/toyboyAdvant15.jpg";
import ambiance16 from "../../images/advantNoida/toyboyAdvant16.jpg";
import ambiance17 from "../../images/advantNoida/toyboyAdvant17.jpg";
import ambiance18 from "../../images/advantNoida/toyboyAdvant18.jpg";
import ambiance19 from "../../images/advantNoida/toyboyAdvant19.jpg";
import ambiance20 from "../../images/advantNoida/toyboyAdvant20.jpg";
import ambiance21 from "../../images/advantNoida/toyboyAdvant21.jpg";
import ambiance22 from "../../images/advantNoida/toyboyAdvant22.jpg";
import ambiance23 from "../../images/advantNoida/toyboyAdvant23.jpg";
import ambiance24 from "../../images/advantNoida/toyboyAdvant24.jpg";
import ambiance25 from "../../images/advantNoida/toyboyAdvant25.jpg";
import ambiance26 from "../../images/advantNoida/toyboyAdvant26.jpg";
import ambiance27 from "../../images/advantNoida/toyboyAdvant27.jpg";
import ambiance28 from "../../images/advantNoida/toyboyAdvant28.jpg";
import ambiance29 from "../../images/advantNoida/toyboyAdvant29.jpg";
import ambiance30 from "../../images/advantNoida/toyboyAdvant30.jpg";
import ambiance31 from "../../images/advantNoida/toyboyAdvant31.jpg";
import ambiance32 from "../../images/advantNoida/toyboyAdvant32.jpg";
import ambiance33 from "../../images/advantNoida/toyboyAdvant33.jpg";
import ambiance34 from "../../images/advantNoida/toyboyAdvant34.jpg";
import ambiance35 from "../../images/advantNoida/toyboyAdvant35.jpg";
import ambiance36 from "../../images/advantNoida/toyboyAdvant36.jpg";
import ambiance37 from "../../images/advantNoida/toyboyAdvant37.jpg";
import { Helmet } from "react-helmet";

// ambiance image end
const ToyboyAdvantNoida = () => {
  const drinkmenu = [
    drinkmenu1,
    drinkmenu2,
    drinkmenu3,
    drinkmenu4,
    drinkmenu5,
    drinkmenu6,
    drinkmenu7,
    drinkmenu8,
    drinkmenu9,
    drinkmenu10,
    drinkmenu11,
    drinkmenu12,
    drinkmenu13,
    drinkmenu14,
  ]
  const foodmenu = [
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
  ]
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ambianceImages = [
    ambiance1,
    ambiance2,
    ambiance3,
    ambiance4,
    ambiance5,
    ambiance6,
    ambiance7,
    ambiance8,
    ambiance9,
    ambiance10,
    ambiance11,
    ambiance12,
    ambiance13,
    ambiance14,
    ambiance15,
    ambiance16,
    ambiance17,
    ambiance18,
    ambiance19,
    ambiance20,
    ambiance21,
    ambiance22,
    ambiance23,
    ambiance24,
    ambiance25,
    ambiance26,
    ambiance27,
    ambiance28,
    ambiance29,
    ambiance30,
    ambiance31,
    ambiance32,
    ambiance33,
    ambiance34,
    ambiance35,
    ambiance36,
    ambiance37,
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
      (prevIndex) =>
        (prevIndex - 1 + ambianceImages.length) % ambianceImages.length
    );
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ambianceImages.length);
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
        <title>ToyBoy Advant Noida - Culinary Excellence & Ambiance</title>
        <meta
          name="description"
          content="Discover ToyBoy Advant Noida, a culinary haven where tradition meets innovation. Explore our diverse food and drink menus, and experience our vibrant ambiance."
        />
        <meta
          name="keywords"
          content="ToyBoy Advant Noida, culinary excellence, food and drink menus, vibrant ambiance, Noida restaurants, food photography"
        />
        <meta property="og:title" content="ToyBoy Advant Noida - Culinary Excellence & Ambiance" />
        <meta property="og:description" content="Discover ToyBoy Advant Noida, a culinary haven where tradition meets innovation. Explore our diverse food and drink menus, and experience our vibrant ambiance." />
        <meta property="og:image" content={ambiance1} />
        <meta property="og:url" content="https://yourwebsite.com/toyboy-advant-noida" />
        <meta name="twitter:title" content="ToyBoy Advant Noida - Culinary Excellence & Ambiance" />
        <meta name="twitter:description" content="Discover ToyBoy Advant Noida, a culinary haven where tradition meets innovation. Explore our diverse food and drink menus, and experience our vibrant ambiance." />
        <meta name="twitter:image" content={ambiance1} />
      </Helmet>
      <div>
        <div className="container">
          <div className="text-center py-5 m-auto">
            <h1 className="food_drink_heading text-white">
              About ToyBoy Advant Noida
            </h1>
            <h6 className="description text-white">
              Nestled in the heart of Noida, ToyBoy is a culinary heaven where
              time-honored recipes meet contemporary flair. Our passion for food
              runs deep, and every dish we serve tells a story of tradition,
              innovation, and a commitment to excellence. Step into our world
              and experience the flavors that have been delighting palates for
              generations.
            </h6>
          </div>
        </div>

        {/* New div with video */}
        <div className="container my-5">
          {/* <div className="video-container">
            <video
              className="w-100"
              height={"100%"}
              controls
              src={bhopalVideo}
              alt="Toy Boy Bhopal Video"
            />
          </div> */}
        </div>

        <div className="container">
          <div className="row">
            <h1 className="text-center mb-3 mt-5" style={{ color: "green" }}>
              Food & Menu Bars
            </h1>
            <div className="col-md-6 p-5">
              {/* drink menu  */}
              <Slider {...settings}>
                {drinkmenu.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      className="img-fluid w-100 h-100"
                      alt={`Drink Menu ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
              {/* drink menu end */}
            </div>
            <div className="col-md-6 p-5">
              {/* food menu  */}
              <Slider {...settings}>
                {foodmenu.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      className="img-fluid w-100 h-100"
                      alt={`Food Menu ${index + 5}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <h1 className="text-center mb-3 mt-5" style={{ color: "green" }}>
              Ambiance
            </h1>
            {ambianceImages.map((image, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="img-thumbnail"
                  onClick={() => openModal(index)}
                  style={{ cursor: "pointer", padding: "0", border: "none" }}
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
                      src={ambianceImages[currentIndex]}
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
        <section id="instagram-feed" className="container py-5">
          <h2 className="mb-4 food_drink_heading text-white text-center">𝕺𝖚𝖗 𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝕽𝖊𝖊𝖑𝖘</h2>
          <div
            className="elfsight-app-3dbe1f25-047e-497e-b895-eeb358933734"
            data-elfsight-app-lazy
          ></div>
        </section>
        <Reservation />
      </div>
    </>
  );
};

export default ToyboyAdvantNoida;
