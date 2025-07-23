import React, { useEffect } from "react";
import "../Contact/contact.css";
import Reservation from "../../components/Reservation/Reservation";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const ContactSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us - ToyBoy</title>
        <meta name="description" content="Get in touch with ToyBoy. Find our contact details, addresses, and opening hours here." />
        <meta name="keywords" content="contact, ToyBoy, address, phone numbers, email, follow us, opening hours" />
      </Helmet>
      <div className="contactimage">
        <div className="contactoverlay">
          <div className="text-center findus text-white">
            <p>Find Us</p>
            <h1 className="heading">Contact</h1>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <ul class="list-group">
              <li class="list-group-item mb-2">
                Address: Third Floor, Lulu Global Mall, Magadi Main Rd, Gopalapura, Binnipete, Bengaluru, Karnataka 560023
              </li>
              <li class="list-group-item mb-2">
               Unit no 326-329, TOY BOY, Gardens Galleria Mall, Sector 38, Noida, Uttar Pradesh 201301   
              </li>
              <li class="list-group-item mb-2">
                Second and Third Floor, Advant Uptown, Unit 204-306, Sector 142, Noida, Uttar Pradesh 201301, 
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul class="list-group">
              <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+917788993876">
                  +91 778-8993-876
                </Link>
              </li>
              <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+917788993863">
                  +91 778-8993-863
                </Link>
              </li>
              {/* <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+919953152666">
                  +91 99531 52666
                </Link>
              </li> */}
            </ul>
            <ul class="list-group">
              <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+919811182474">
                  +91 9811182474
                </Link>
              </li>
              <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+917788993864">
                  +91 7788993864
                </Link>
              </li>
              <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+919811182417">
                  +91 9811182417
                </Link>
              </li>
            </ul>
            <ul class="list-group">
              {/* <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+919811182417">
                  +91 9811182417
                </Link>
              </li> */}
              {/* <li class="list-group-item mb-2">
                <Link className="text-black" to="tel:+9107554148410">
                  +91 07554148410
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="col-md-4">
            <ul class="list-group">
              <li class="list-group-item mb-2">
                <Link className="text-black" to="mailto:advant@ToyBoyindia.in">
                  advant@ToyBoyindia.in
                </Link>{" "}
                /
                <Link className="text-black" to="mailto:vp@ToyBoyindia.in">
                  vp@ToyBoyindia.in
                </Link>{" "}
                /
                <Link className="text-black" to="mailto:bd@ToyBoyindia.in">
                  bd@ToyBoyindia.in
                </Link>
              </li>
            </ul>
            <ul class="list-group">
              <li class="list-group-item mb-2">
                <Link className="text-black" to="mailto:advant@ToyBoyindia.in">
                  advant@ToyBoyindia.in
                </Link>{" "}
                /
                <Link className="text-black" to="mailto:vp@ToyBoyindia.in">
                  vp@ToyBoyindia.in
                </Link>{" "}
                /
                <Link className="text-black" to="mailto:bd@ToyBoyindia.in">
                  bd@ToyBoyindia.in
                </Link>
              </li>
            </ul>
            <ul class="list-group">
              <li class="list-group-item mb-2">
                <Link className="text-black" to="mailto:vp@ToyBoyindia.in">
                  vp@ToyBoyindia.in
                </Link>{" "}
                /
                <Link className="text-black" to="mailto:bd@ToyBoyindia.in">
                  bd@ToyBoyindia.in
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-white mt-5" />
        <div className="row py-5 text-white mt-5">
          <div className="col-md-6">
            <h1>Follow Us</h1>
            <div className="folloLinks">
              <div className="facebook">
                <Link className="text-white" to="#">
                  <i class="bi bi-facebook"></i>
                </Link>
              </div>
              <div className="insta">
                <Link className="text-white" to="#">
                  <i class="bi bi-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h1>Opening Hours</h1>

            <h3>Monday-Sunday : 12PM - 1AM</h3>
          </div>
        </div>
      </div>
      <Reservation />
    </>
  );
};

export default ContactSection;
