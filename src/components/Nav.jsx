import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light sticky-top px-4 px-lg-5 py-lg-0 bg-white">
        
  <Link to="/" className="navbar-brand">
  <div className="brand-id"> <img src="img/ccws_logo.png"  alt="Brand-Logo" /> <h1 className="m-0 text-primary">
  
    Creme de la Creme <br/> Wesleyan School</h1> </div>
   
     {/* <h1 className="m-0 text-primary "><i className="fa fa-book-reader me-3" />CCWS</h1> */}
  </Link>
  <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav mx-auto">
      <NavLink to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About Us</NavLink>
      <NavLink to="/classes" className="nav-item nav-link" activeClassName="active">Classes</NavLink>
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
      <NavLink to="/gallery" className="nav-item nav-link" activeClassName="active">Gallery</NavLink>
      <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact Us</NavLink>
    </div>
    <Link to="/" className="btn btn-cus1 btn-primary rounded-pill px-3 d-none d-lg-block">Enroll Now<i className="fa fa-arrow-right ms-3" /></Link>
  </div>
</nav>

    </>
  )
}

export default Nav