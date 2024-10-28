import React from 'react'

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div className="container-fluid bg-footer text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />East Legon, Accra</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233 222 2222</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <a className="btn btn-link text-white-50" href>About Us</a>
              <a className="btn btn-link text-white-50" href>Contact Us</a>
              <a className="btn btn-link text-white-50" href>Our Services</a>
              <a className="btn btn-link text-white-50" href>Privacy Policy</a>
              <a className="btn btn-link text-white-50" href>Terms &amp; Condition</a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Our Services</h3>
              <p className="text-white-50">We provide top-notch services in the areas of web development, mobile app development, and digital marketing.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="/">Your Site Name</a>, All Right Reserved.
                Designed By <a className="border-bottom" href="https://htmlcodex.com">Tonuel Innovations</a>
              </div>
              {/* <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href>Home</a>
                  <a href>Cookies</a>
                  <a href>Help</a>
                  <a href>FAQs</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
    </div>
  )
}

export default Footer
