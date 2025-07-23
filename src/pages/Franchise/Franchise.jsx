import React, { useEffect } from "react";
import "../Franchise/franchise.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Franchise = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Franchise - ToyBoy</title>
        <meta
          name="description"
          content="Join ToyBoy's exciting franchise opportunities and bring the ultimate party destination to your city. Learn more about becoming a ToyBoy franchisee and the benefits we offer."
        />
        <meta
          name="keywords"
          content="ToyBoy, franchise, party destination, nightlife, ToyBoy franchise, club, business opportunity, entertainment, franchisee"
        />
        <meta name="author" content="ToyBoy" />
      </Helmet>
      <div>
        <div className="container">
          <div className="franchiseheading text-white text-center py-5">
            <h1 className="heading">Franchise</h1>
          </div>
          <div className="franchise text-center text-white">
            <i className="bi bi-shop-window"></i>
            <h1 className="heading">THE ULTIMATE PARTY DESTINATION</h1>
            <p>
              Bring the ultimate nightlife experience to your city with a TOY
              BOY franchise! We’re inviting dynamic entrepreneurs to join our
              brand and create unforgettable nights filled with music, energy,
              and excitement. As a TOY BOY franchisee, you’ll benefit from our
              established reputation, comprehensive training, marketing support,
              and a business model that sets you up for success. Let’s turn up
              the volume and make your city the next big party destination.
              Ready to take the lead in nightlife? Join the TOY BOY family
              today.
            </p>
          </div>

          <div className="franchise-intro text-start text-white py-5">
            <h2 className="display-4 font-weight-bold mb-4">
              Welcome to TOY BOY Franchise
            </h2>
            <p className="lead mb-4">
              Step into a world where the beats are infectious, the energy is
              electric, and the night comes alive. Welcome to TOY BOY Franchise,
              where every moment is a celebration and every night is
              unforgettable.
            </p>
            <h3 className="display-5 font-weight-bold mb-3">
              Why Choose TOY BOY Franchise?
            </h3>
            <ul className="list-unstyled mb-4">
              <li className="mb-3">
                <strong>Unmatched Nightlife Experience:</strong> Immerse
                yourself in the ultimate nightlife experience at TOY BOY. Our
                venue is a fusion of cutting-edge sound, dynamic lighting, and a
                vibrant atmosphere that transforms every night into a spectacle.
              </li>
              <li className="mb-3">
                <strong>Stellar Lineup of Entertainment:</strong> Brace yourself
                for a lineup of top-notch DJs, live performances, and themed
                events that keep the excitement at a fever pitch. From intimate
                live shows to high-energy dance parties, we curate experiences
                that cater to diverse tastes.
              </li>
              <li className="mb-3">
                <strong>VIP Treatment:</strong> Elevate your night with our VIP
                packages that redefine luxury and exclusivity. Enjoy dedicated
                service, premium seating, and access to private areas for an
                experience that goes beyond the ordinary.
              </li>
            </ul>
            <h3 className="display-5 font-weight-bold mb-3">
              Franchise Opportunities
            </h3>
            <p className="lead mb-4">
              Ready to be a pioneer in the nightlife industry? Join TOY BOY and
              become a key player in delivering unparalleled entertainment
              experiences. Here's why you should consider franchising with us:
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-3">
                <strong>Trendsetting Brand:</strong> TOY BOY is not just a club;
                it's a lifestyle. Benefit from being associated with a brand
                that sets trends, pushes boundaries, and becomes synonymous with
                an exceptional nightlife experience.
              </li>
              <li className="mb-3">
                <strong>Expert Support:</strong> Our experienced team is
                committed to supporting you at every stage of your franchise
                journey. From club design and marketing strategies to talent
                booking and event planning, we provide the expertise to ensure
                your success.
              </li>
              <li className="mb-3">
                <strong>Proven Success:</strong> Join a franchise that has
                mastered the art of creating unforgettable nights and become a
                part of a global nightlife phenomenon.
              </li>
            </ul>
            <h3 className="display-5 font-weight-bold mb-4">
              Join the TOY BOY Franchise Revolution
            </h3>
            <p className="lead mb-4">
              Ready to own a piece of the nightlife scene? Take the first step
              toward becoming a TOY BOY Franchise partner. Contact us today to
              discover the excitement, opportunities, and rewards that come with
              bringing the ultimate club experience to your city.
            </p>
          </div>

          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6 text-white py-5">
              <h1>Be a Franchisee!</h1>
              <p className="mb-3">
                Step into success—become a franchisee of a top-tier club or
                restaurant and elevate your business journey with TOY BOY.
              </p>
              <h5 className="mb-3">
                Mail Us : &nbsp;
                <Link
                  className="text-white text-decoration-none"
                  to="mailto:franchise@toyboy.in"
                >
                  franchise@toyboy.in
                </Link>
              </h5>
              <h5>
                Contact : &nbsp;
                <Link
                  className="text-white text-decoration-none"
                  to="tel:+919811182417"
                >
                  9811182417
                </Link>
                &nbsp; / &nbsp;
                <Link
                  className="text-white text-decoration-none"
                  to="tel:+917788993876"
                >
                  7788993876
                </Link>
                &nbsp; / &nbsp;
                <Link
                  className="text-white text-decoration-none"
                  to="tel:+919711292967"
                >
                  9711292967
                </Link>
              </h5>
            </div>

            <div className="col-md-6">
              <div className="container my-5">
                <form className="franchiseForm">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Location"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-custom">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Franchise;
