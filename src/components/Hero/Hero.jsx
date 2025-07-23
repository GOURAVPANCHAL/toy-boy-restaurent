import React, { useEffect } from "react";
import "../Hero/hero.css";
import hero2 from "../../images/noida12.jpg";
import devider from "../../images/divider.png";
import meal from "../../images/meal.png";
import menu from "../../images/noida3.jpg";
import Reservation from "../Reservation/Reservation";
import { Link } from "react-router-dom";
// import Video from "../../pages/InstagramVideo/Video";

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <section className="hero1">
        <div className="hero1overlay">
          <div className="herosection">
            <div>
              <h1 className="heroheading">Experience The Difference</h1>
            </div>
            <div className="heroDisc">
              When the groove calls, we deliver with the hottest beats, best vibes and the best cuisine. Get ready for an unmatched experience!
            </div>
            <Link to={"/food-drinks"}>
              <button className="overmenu">OUR MENU</button>
            </Link>
          </div>
        </div>
        {/* <div className="leaf">

        </div> */}
      </section>

      <section className="hero2 py-10">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={hero2}
                style={{ width: "100%" }}
                alt="Hero Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="hero2Content">
                <h6 className="mb-3">The Ultimate destination for Your Special Occasion</h6>
                <h1 className="mb-4">
                  If you're seeking a place to celebrate with delicious food and a stylish atmosphere, Toyboy is your ideal destination.
                </h1>
                <Link to={"/gallery"}>
                  <button className="overmenu mb-3">OUR GALLERY </button>
                </Link>
              </div>
              <div>
                <img
                  src={devider}
                  style={{ width: "100%" }}
                  alt="website-design-photo"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="hero3Content">
                <h6>Taste the Joy</h6>
                <h1>What Sets Us Apart:</h1>
              </div>
              <div className="heroDisc">
                A diverse menu, budget-friendly prices, customizable options, versatile hosting, and inviting outdoor seating.
              </div>
              <div>
                <div className="hero3Content">
                  <Link to={"/food-drinks"}>
                    <button className="overmenu mb-5">OUR MENU</button>
                  </Link>
                  <img
                    src={devider}
                    style={{ width: "100%" }}
                    alt="website-design-photo"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={meal}
                style={{ width: "100%" }}
                alt="Hero Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <section className="hero4">
          <div className="container">
            <div class="divider mb-5">
              <span>Have it your way</span>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img src={menu} alt="menu item" style={{ width: "100%" }} />
              </div>
              <div className="col-md-4 foodMenu">
                <div className="foodMenu">
                  <h1>Food Menu</h1>
                  <p>
                    “Explore our menu with fresh ingredients and expertly
                    crafted dishes. Enjoy classic favorites and new flavors, all
                    made with care for a truly delightful meal.
                  </p>
                  <Link to={"/food-drinks"}>
                    <button className="foodmenubutton mb-5">FOOD MENU</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 drinkMenu">
                <div className="drinkMenu">
                  <h1>Drink Menu</h1>
                  <p>
                    “Drink menu with a range of refreshing cocktails, premium
                    spirits, and unique mixes. Each option is crafted to deliver
                    a refreshing and enjoyable experience. Cheers!
                  </p>
                  <Link to={"/food-drinks"}>
                    <button className="barmenu mb-5">BAR MENU</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <Video /> */}
      <section id="videos" className="container py-5">
        <h2 className="food_drink_heading text-white mb-4 text-center">𝕺𝖚𝖗 𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝕽𝖊𝖊𝖑𝖘</h2>
        {/* Elfsight Instagram Feed */}
        <div
          className="elfsight-app-28e20741-4d23-4b59-b5f2-6fa0c4a94289"
          data-elfsight-app-lazy
        ></div>
      </section>
      <Reservation />
      {/* <section className="locations">
        <div className="container">
          <div className="row text-center">
            <h1 className="mb-5" style={{ color: "white" }}>
              Toy Boy Coming Soon
            </h1>
            <div className="col-md-3 mb-3">
              <h1>New Delhi</h1>
            </div>
            <div className="col-md-3 mb-3">
              <h1>Gurugram</h1>
            </div>
            <div className="col-md-6 mb-3">
              <h1>Noida Electronic City</h1>
            </div>
            <div className="col-md-6">
              <h1>Noida Extension</h1>
            </div>
            <div className="col-md-6">
              <h1>Greater Noida</h1>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
