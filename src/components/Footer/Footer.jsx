import React from "react";
import "../Footer/footer.css";
import footerlogo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_main_" style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <footer>
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li>
                    <Link to="#galleria">
                      <i className="bi bi-cup-fill"></i> ToyBoy Bangalore
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+917788993876">
                      <i className="bi bi-telephone-outbound-fill"></i>
                     +91 7788993876
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:7788993864">
                      <i className="bi bi-telephone-outbound-fill"></i>
                     +91 7788993863
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:Franchise@toyboy.in">
                      <i className="bi bi-envelope-fill"></i>
                      Franchise@toyboy.in
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:BDblr@toyboy.in">
                      <i className="bi bi-envelope-fill"></i>
                      BDblr@toyboy.in
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:RMblr@toyboy.in">
                      <i className="bi bi-envelope-fill"></i>
                      RMblr@toyboy.in
                    </Link>
                  </li>
                  <li>
                    <Link to="#location">
                      <i className="bi bi-geo-alt-fill"></i>
                      Third Floor, Lulu Global Mall, Magadi Main Rd, Gopalapura,
                      Binnipete, Bengaluru, Karnataka 560023
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>
                    <Link to="#advant">
                      <i className="bi bi-cup-fill"></i> ToyBoy Gardens Galleria
                      Noida
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+919811182474">
                      <i className="bi bi-telephone-outbound-fill"></i>
                      +91 9811182474
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:advant@ToyBoyindia.in">
                      <i className="bi bi-envelope-fill"></i>
                      advant@ToyBoyindia.in
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:franchise@ToyBoyindia.in">
                      <i className="bi bi-envelope-fill"></i>
                      franchise@ToyBoyindia.in, vp@ToyBoyindia.in, bd@ToyBoyindia.in
                    </Link>
                  </li>
                  <li>
                    <Link to="http://surl.li/lurdgh">
                      <i className="bi bi-geo-alt-fill"></i>
                      Unit no 326-329, TOY BOY, Gardens Galleria Mall, Sector
                      38, Noida, Uttar Pradesh 201301
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>
                    <Link to="#bhopal">
                      <i className="bi bi-cup-fill"></i> ToyBoy Advant
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+91 9811182474">
                      <i className="bi bi-telephone-outbound-fill"></i>
                      098111 82474
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="tel:9811182417">
                      <i className="bi bi-telephone-outbound-fill"></i>
                      9811182417
                    </Link>
                  </li> */}
                  <li>
                    <Link to="mailto:franchise@ToyBoyindia.in">
                      <i className="bi bi-envelope-fill"></i>
                      franchise@ToyBoyindia.in, vp@ToyBoyindia.in, bd@ToyBoyindia.in
                    </Link>
                  </li>
                  <li>
                    <Link to="http://surl.li/lurdgh">
                      <i className="bi bi-geo-alt-fill"></i>
                      Second and Third Floor, Advant Uptown Unit 204-306, Sector
                      142, Noida
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <button className="subscribeFooter">SUBSCRIBE</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="footer-bottom d-flex align-items-center">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-md-12 text-center">
              <small>
                © Copyright 2024, ToyBoy. Designed by{" "}
                <small>
                  Designed by &nbsp;
                  <a  style={{color:'#ca9c5e'}}
                  target="_blank"
                    href="https://www.digiindiasolutions.com/"
                    className="text-decoration-none"
                  >
                    Digi India Solution
                  </a>
                </small>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
