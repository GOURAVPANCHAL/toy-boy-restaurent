import React from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OurTeam from "./pages/OurTeam/OurTeam.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodDrink from "./pages/FoodDrink/FoodDrink.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Franchise from "./pages/Franchise/Franchise.jsx";
import ContactSection from "./pages/Contact/Contact.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import ToyBoyGardenGalleria from "./pages/ToyBoyGardenGalleria/ToyBoyGardenGalleria.jsx";
import ToyboyAdvantNoida from "./pages/ToyboyAdvantNoida/ToyboyAdvantNoida.jsx";
import ToyBoyBangalore from "./pages/ToyBoyBangalore/ToyBoyBangalore.jsx";
import Events from "./pages/Events/Events.jsx";
import Video from "./pages/InstagramVideo/Video.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/our_team" element={<OurTeam />} />
        <Route path="/food-drinks" element={<FoodDrink />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/toyboy-garden-galleria" element={<ToyBoyGardenGalleria />} />
        <Route path="/toyboy-advand-noida" element={<ToyboyAdvantNoida />} />
        <Route path="/toyboy-bangelore" element={<ToyBoyBangalore />} />
        <Route path="/events" element={<Events />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
