import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLinkClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand ms-3" to="/">
          <img src={logo} alt="Rubaruu Logo" className="header-logo" />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNavDropdown"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/our_team"
                onClick={handleLinkClick}
              >
                Our Team
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/food-drinks"
                onClick={handleLinkClick}
              >
                Food & Drinks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/gallery"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/video"
                onClick={handleLinkClick}
              >
                Videos
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/franchise"
                onClick={handleLinkClick}
              >
                Franchise
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events" onClick={handleLinkClick}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact us
              </Link>
            </li>
            {/* Dropdown menu */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Toy Boy Advant
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/toyboy-garden-galleria"
                    onClick={handleLinkClick}
                  >
                    ToyBoy Gardens Galleria Noida
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/toyboy-advand-noida"
                    onClick={handleLinkClick}
                  >
                    ToyBoy Advant Noida
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/toyboy-bangelore"
                    onClick={handleLinkClick}
                  >
                    ToyBoy Bangalore
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
