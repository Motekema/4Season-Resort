import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleBookingButtonClick = () => {
    window.location.href =
      "https://www.booking.com/hotel/za/4-seasons-country-club.en-gb.html?aid=356980&label=gog235jc-1DCAso-wFCFjQtc2Vhc29ucy1jb3VudHJ5LWNsdWJIM1gDaPsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKq14OuBsACAdICJDg3ZDkwYzEwLWQ4MzYtNDUyZi1hNjUzLWQ4YTRjNGE5ODIyY9gCBOACAQ&sid=0e09e4c0192751bee7ae9c4499e46ece&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  bg-body-tertiary">
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            4seasons Resort
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* means */}
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav ms-auto nav_ul align-items-center">
              {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <div className="mx-3">
                <button
                  type="button"
                  className="btn1 mx-2"
                  onClick={handleBookingButtonClick}
                >
                  Booking.com
                </button>
                <button type="button" className="btn2 mx-2">
                  Sign Up
                </button>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </ul>
          </div>
          {/* end */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
