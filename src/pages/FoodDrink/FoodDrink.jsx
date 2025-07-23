import React, { useEffect } from "react";
import "../FoodDrink/food.css";
import Reservation from "../../components/Reservation/Reservation";
import Slider from "react-slick";

// food menu
import foodmenu1 from "../../images/food1.jpeg";
import foodmenu2 from "../../images/food2.jpeg";
import foodmenu3 from "../../images/food3.webp";
import foodmenu4 from "../../images/food5.jpeg";

// menu images
import foodmenu5 from "../../images/banglore/food-menu/1.png";
import foodmenu6 from "../../images/banglore/food-menu/2.png";
import foodmenu7 from "../../images/banglore/food-menu/3.png";
import foodmenu8 from "../../images/banglore/food-menu/4.png";
import foodmenu9 from "../../images/banglore/food-menu/5.png";
import foodmenu10 from "../../images/banglore/food-menu/6.png";
import foodmenu11 from "../../images/banglore/food-menu/7.png";
import foodmenu12 from "../../images/banglore/food-menu/8.png";
import foodmenu13 from "../../images/banglore/food-menu/9.png";
import foodmenu14 from "../../images/banglore/food-menu/10.png";
import foodmenu15 from "../../images/banglore/food-menu/11.png";
import foodmenu16 from "../../images/banglore/food-menu/12.png";
import foodmenu17 from "../../images/banglore/food-menu/13.png";
import foodmenu18 from "../../images/banglore/food-menu/14.png";
import foodmenu19 from "../../images/banglore/food-menu/15.png";
import foodmenu20 from "../../images/banglore/food-menu/16.png";
import foodmenu21 from "../../images/banglore/food-menu/17.png";
import foodmenu22 from "../../images/banglore/food-menu/18.png";
import foodmenu23 from "../../images/banglore/food-menu/19.png";

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


import drinkmenu24 from "../../images/drink1.webp";
import drinkmenu25 from "../../images/drink2.jpg";
import drinkmenu26 from "../../images/drink3.jpg";
import drinkmenu27 from "../../images/drink4.jpeg";
import { Helmet } from "react-helmet";
// drink menu end


const FoodDrink = () => {
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

  const foodMenus = [
    foodmenu5, foodmenu6, foodmenu7, foodmenu8, foodmenu9,
    foodmenu10, foodmenu11, foodmenu12, foodmenu13, foodmenu14,
    foodmenu15, foodmenu16, foodmenu17, foodmenu18, foodmenu19,
    foodmenu20, foodmenu21, foodmenu22, foodmenu23,
  ];
  return (
    <>
      <Helmet>
        <title>Food & Drinks - Toy Boy</title>
        <meta name="description" content="Enjoy a diverse range of food and drinks at Toy Boy. From exquisite meals to refreshing drinks, there's something for every taste!" />
        <meta name="keywords" content="food, drinks, menu, Toy Boy, nightlife, dining, beverages" />
      </Helmet>
      <div className="food-drink-section py-5">
        <div className="container">
          <div className="foodBox">
            <h1 className="food_drink_heading text-white">𝕱𝖔𝖔𝖉 & 𝕯𝖗𝖎𝖓𝖐𝖘</h1>
            <p className="description text-white">
              Enjoy some food treatment with few of our best cooking styles that
              are passages to a taste bud paradise
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row mb-5" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <div className="row mb-5">
                <h1 className="text-white">Food Menu</h1>
                <div className="col-6">
                  <img
                    src={foodmenu1}
                    alt="food menu 1"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={foodmenu2}
                    alt="food menu 2"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={foodmenu3}
                    alt="food menu 3"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={foodmenu4}
                    alt="food menu 4"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Slider {...settings}>
                {foodMenus.map((img, index) => (
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
          <div className="row mt-5" style={{ alignItems: "center" }}>
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6 mt-5">
              <div className="row">
                <h1 className="text-white">DRINKS MENU</h1>
                <div className="col-6">
                  <img
                    src={drinkmenu24}
                    alt="DRINKS MENU 1"
                    className="img-fluid rounded drinkmenuminiImage"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={drinkmenu25}
                    alt="DRINKS MENU 2"
                    className="img-fluid rounded drinkmenuminiImage"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={drinkmenu26}
                    alt="DRINKS MENU 3"
                    className="img-fluid rounded drinkmenuminiImage"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={drinkmenu27}
                    alt="DRINKS MENU 4"
                    className="img-fluid rounded drinkmenuminiImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Reservation />
      </div>
    </>
  );
};

export default FoodDrink;
