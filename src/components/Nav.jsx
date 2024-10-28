import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    {/* top nav start */}

      <div className="header-top-area d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fas fa-clock"></i>6:00 am - 5:00 pm - Mon -
                    Fri
                  </li>
                  <li>
                    <i className="fas fa-phone-alt" />
                    <a href="tel:84212563249">030 395 9567</a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    <a href="/">East Legon Hill, Accra</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-social">
                <ul>
                  <li>
                    <a href="http://www.facebook.com">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>{" "}
                  <li>
                    <a href="http://www.twitter.com">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>{" "}
                  <li>
                    <a href="http://www.instagram.com">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>{" "}
                  <li>
                    <a href="http://www.linkedin.com">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* top nav end */}

      <nav className="navbar navbar-expand-lg navbar-light sticky-top px-4 px-lg-5 py-lg-0 bg-white">
        <Link to="/" className="navbar-brand">
          <div className="brand-id">
            {" "}
            <img src="img/ccws_logo.png" alt="Brand-Logo" />
            {/* <h1 style={{fontFamily:"sans-serif"}} className="m-0 text-primary">
  
  Créme De La Créme <br/> Wesleyan School</h1>  */}
          </div>

          {/* <h1 className="m-0 text-primary "><i className="fa fa-book-reader me-3" />CCWS</h1> */}
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto  nav-custom">
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="nav-item nav-link"
              activeClassName="active"
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/classes"
              className="nav-item nav-link"
              activeClassName="active"
            >
              CLASSES
            </NavLink>
            <NavLink
              to="/facilities"
              className="nav-item nav-link"
              activeClassName="active"
            >
              FACILITIES
            </NavLink>
            {/* <div className="nav-item dropdown">
        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Explore</Link>
        <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
          <Link to="facilities" className="dropdown-item">School Facilities</Link>
          <Link to="/teams" className="dropdown-item">Popular Teachers</Link>
          <Link to="/call-to-action" className="dropdown-item">Become A Teachers</Link>
          <Link to="/appointment" className="dropdown-item">Make Appointment</Link>
          <Link to="/testimonials" className="dropdown-item">Testimonial</Link>
        </div>
      </div> */}
            <NavLink
              to="/gallery"
              className="nav-item nav-link"
              activeClassName="active"
            >
              GALLERY
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-item nav-link"
              activeClassName="active"
            >
              CONTACT US
            </NavLink>
          </div>
          {/* <Link to="/" className="btn btn-cus1 btn-primary rounded-pill px-3 d-none d-lg-block">Admission<i className="fa fa-arrow-right ms-3" /></Link> */}
        </div>
      </nav>
    </>
  );
}

export default Nav