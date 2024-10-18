import React from 'react'

function Contact() {
  return (
    <>
       <div>
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">Contact Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Get In Touch</h1>
        <p>We’d love to hear from you! Whether you have questions or want to learn more about Creme de la Creme, feel free to reach out. </p>
      </div>
      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: 75, height: 75}}>
            <i className="fa fa-map-marker-alt fa-2x text-primary" />
          </div>
          <h6>East Legon,Accra</h6>
        </div>
        <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: 75, height: 75}}>
            <i className="fa fa-envelope-open fa-2x text-primary" />
          </div>
          <h6>info@example.com</h6>
        </div>
        <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: 75, height: 75}}>
            <i className="fa fa-phone-alt fa-2x text-primary" />
          </div>
          <h6>+233 222 2222</h6>
        </div>
      </div>
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 400, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</div>

    </>
  )
}

export default Contact