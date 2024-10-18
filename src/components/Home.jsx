import React from 'react'
import Header from './Header'

function Home() {
  return (
    <>
     <Header/>

   <div>
     {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
          <p>We understand that early childhood is a critical time for development, and our play-based learning approach supports not just academic growth but also emotional and social well-being. This holistic approach ensures that each child feels valued, confident, and ready for the future.</p>
          <p className="mb-4">Join us at Creme de la Creme, where we are passionate about guiding your child through the most important developmental years with care, creativity, and excellence.</p>
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
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
              <img className="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt=" " />
            </div>
            <div className="col-6 text-start" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt=" " />
            </div>
            <div className="col-6 text-end" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}

  {/* Facilities Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Our School Facilities</h1>
        <p>At Creme de la Creme, we pride ourselves on our safe, welcoming, and well-equipped facilities. Our classrooms are designed to inspire creativity and collaboration, while our outdoor play areas provide ample space for exploration and physical activity. </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="facility-item">
            <div className="facility-icon bg-primary">
              <span className="bg-primary" />
              <i className="fa fa-bus-alt fa-3x text-primary" />
              <span className="bg-primary" />
            </div>
            <div className="facility-text bg-primary">
              <h3 className="text-primary mb-3">School Bus</h3>
              <p className="mb-0">Our safe school bus service ensures comfortable travel to and from Creme de la Creme.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="facility-item">
            <div className="facility-icon bg-success">
              <span className="bg-success" />
              <i className="fa fa-futbol fa-3x text-success" />
              <span className="bg-success" />
            </div>
            <div className="facility-text bg-success">
              <h3 className="text-success mb-3">Playground</h3>
              <p className="mb-0">The vibrant playground encourages outdoor fun and physical activity.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="facility-item">
            <div className="facility-icon bg-warning">
              <span className="bg-warning" />
              <i className="fa fa-home fa-3x text-warning" />
              <span className="bg-warning" />
            </div>
            <div className="facility-text bg-warning">
              <h3 className="text-warning mb-3">Healthy Canteen</h3>                            
              <p className="mb-0">Our healthy canteen offers nutritious meals and snacks for growing children.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="facility-item">
            <div className="facility-icon bg-info">
              <span className="bg-info" />
              <i className="fa fa-chalkboard-teacher fa-3x text-info" />
              <span className="bg-info" />
            </div>
            <div className="facility-text bg-info">
              <h3 className="text-info mb-3">Positive Learning</h3>
              <p className="mb-0">We create a positive learning environment that inspires curiosity and creativity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facilities End */}
 
  {/* Call To Action Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" alt="" style={{objectFit: 'cover'}} />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Become A Teacher</h1>
              <p className="mb-4">Are you passionate about shaping young minds and making a lasting impact? Join our team at [Kindergarten Name], where we believe in nurturing both children and educators.
              </p>
              <a className="btn btn-primary py-3 px-5" href>Get Started Now<i className="fa fa-arrow-right ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Call To Action End */}
  {/* Classes Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">School Classes</h1>
        <p>At Creme de la Creme, we offer a range of engaging classes designed to spark curiosity and creativity in every child. Our tailored curriculum ensures a fun, hands-on learning experience that meets the needs of each age group.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="img/classes-1.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Art &amp; Drawing</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">Capacity:</h6>
                    <small>30 Kids</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="img/classes-2.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Color Management</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">Capacity:</h6>
                    <small>30 Kids</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="img/classes-3.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Athletic &amp; Dance</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">Capacity:</h6>
                    <small>30 Kids</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="img/classes-4.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Language &amp; Speaking</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">Capacity:</h6>
                    <small>30 Kids</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="img/classes-5.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Religion &amp; History</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">Capacity:</h6>
                    <small>30 Kids</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="img/classes-6.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>General Knowledge</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">Capacity:</h6>
                    <small>30 Kids</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Classes End */}
  {/* Appointment Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Make Appointment</h1>
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                      <label htmlFor="gname">Guardian Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                      <label htmlFor="gmail">Guardian Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                      <label htmlFor="cname">Child Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                      <label htmlFor="cage">Child Age</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src="img/appointment.jpg" alt="" style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Appointment End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Popular Teachers</h1>
        <p>Meet the heart of Creme de la Creme—our dedicated and talented teachers! Known for their creativity, warmth, and expertise, our teachers make learning fun and engaging for every child..</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt=" " />
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
            <img className="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt=" " />
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
            <img className="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt=" " />
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
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">What Our Parents Say!</h1>
        <p>Parents love Creme de la Creme for our caring staff and the positive impact we have on their children’s growth and learning.</p>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt="" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt="" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt="" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</div>

    </>

  )
}

export default Home