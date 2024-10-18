import React from 'react'

function About() {
  return (
    <>
   <div>
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">About Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">About Us</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
          <p>
          At Creme de la Creme, we believe in creating a warm and nurturing environment where every child can explore, learn, and grow. With years of experience in the field of early childhood education, we are proud to be leaders in providing exceptional care and learning experiences for young children. 
          Our team of highly trained educators combines passion with expertise to ensure that every child thrives.
          </p>
          <p className="mb-4">We understand that early childhood is a critical time for development, and our play-based learning approach supports not just academic growth but also emotional and social well-being.
             This holistic approach ensures that each child feels valued, confident, and ready for the future.
          </p>
          
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: 45, height: 45}} />
                <div className="ms-3">
                  <h6 className="text-primary mb-1">Jhon Doe</h6>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
          <div className="row">
            <div className="col-12 text-center">
              <img className="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt="" />
            </div>
            <div className="col-6 text-start" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt="" />
            </div>
            <div className="col-6 text-end" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Call To Action Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" style={{objectFit: 'cover'}} alt=""/>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Become A Teacher</h1>
              <p className="mb-4">Are you passionate about shaping young minds and making a lasting impact? Join our team at Creme de la Creme, where we believe in nurturing both children and educators. As a teacher with us, you’ll have the opportunity to inspire curiosity, creativity, and growth in a supportive and enriching environment. 
                Start your rewarding career in early childhood education with us today!
              </p>
              <a className="btn btn-primary py-3 px-5" href>Get Started Now<i className="fa fa-arrow-right ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Call To Action End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Popular Teachers</h1>
        <p>Meet the heart of Creme de la Creme—our dedicated and talented teachers! Known for their creativity, warmth, and expertise, our teachers make learning fun and engaging for every child.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt="" />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt=""/>
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt="" />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</div>

    </>
  )
}

export default About