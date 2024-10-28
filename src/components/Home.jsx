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
          <h1 className="">Welcome to CCWS</h1>
          <h5 className='color-sec mb-4'>Creme De La Creme Weslayn School</h5>
          <p>We understand that early childhood is a critical time for development, and our play-based learning approach supports not just academic growth but also emotional and social well-being. This holistic approach ensures that each child feels valued, confident, and ready for the future.</p>
          <p className="mb-4">Join us at Creme de la Creme, where we are passionate about guiding your child through the most important developmental years with care, creativity, and excellence.</p>
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
            </div>
            {/* <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=" " style={{width: 45, height: 45}} />
                <div className="ms-3">
                  <h6 className="text-primary mb-1">Jhon Doe</h6>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
            </div> */}
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

        
        {/* mine */}
              
        
  {/* Card 1 */}
  <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="card-container">
            <div className="card">
                <div className="card-front" style={{ background: '#28a745' }}>
                    <div className="card-icon">
                        <i className="fa fa-futbol" />
                    </div>
                    <div className="card-text">
                        <h3 className="mb-3">Playground</h3>
                        <p className="mb-0">The vibrant playground encourages outdoor fun and physical activity.</p>
                    </div>
                </div>
                <div className="card-back" style={{ background: 'url(/img/classes-1.jpg) no-repeat center', backgroundSize: 'cover' }}>
                </div>
            </div>
        </div>
    </div>

    {/* Card 2 */}
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
        <div className="card-container">
            <div className="card">
                <div className="card-front" style={{ background: '#007bff' }}>
                    <div className="card-icon">
                        <i className="fa fa-bus" />
                    </div>
                    <div className="card-text">
                        <h3 className="mb-3">School Bus</h3>
                        <p className="mb-0">Our safe school bus service ensures comfortable travel to and from Creme de la Creme.</p>
                    </div>
                </div>
                <div className="card-back" style={{ background: 'url(/img/classes-2.jpg) no-repeat center', backgroundSize: 'cover' }}>
                </div>
            </div>
        </div>
    </div>

    {/* Card 3 */}
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="card-container">
            <div className="card">
                <div className="card-front" style={{ background: '#dc3545' }}>
                    <div className="card-icon">
                        <i className="fa fa-book" />
                    </div>
                    <div className="card-text">
                        <h3 className="mb-3">Library</h3>
                        <p className="mb-0">Our well-stocked library fosters a love for reading and learning.</p>
                    </div>
                </div>
                <div className="card-back" style={{ background: 'url(/img/classes-3.jpg) no-repeat center', backgroundSize: 'cover' }}>
                </div>
            </div>
        </div>
    </div>

    {/* Card 4 */}
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
        <div className="card-container">
            <div className="card">
                <div className="card-front" style={{ background: '#FFC107' }}>
                    <div className="card-icon">
                        <i className="fa fa-paint-brush" />
                    </div>
                    <div className="card-text">
                        <h3 className="mb-3">Art Studio</h3>
                        <p className="mb-0">Our art studio inspires creativity and self-expression.</p>
                    </div>
                </div>
                <div className="card-back" style={{ background: 'url(/img/classes-4.jpg) no-repeat center', backgroundSize: 'cover' }}>
                </div>
            </div>
        </div>
    </div>






          {/* mine */}

        
      </div>
    </div>
  </div>
  {/* Facilities End */}
 
  {/* Call To Action Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-cus-light rounded">
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
        <h1 className="mb-3">Discover Our <br/>Educational Programs</h1>
        <p>At Creme de la Creme, we offer a range of engaging classes designed to spark curiosity and creativity in every child. Our tailored curriculum ensures a fun, hands-on learning experience that meets the needs of each age group.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded mx-auto p-3">
              <img className="img-fluid rounded" src="img/classes-1.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Art &amp; Drawing</a>
              <div className="d-flex align-items-center justify-content-between mb-4">       
              </div>    
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded mx-auto p-3">
              <img className="img-fluid rounded" src="img/classes-1.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Art &amp; Drawing</a>
              <div className="d-flex align-items-center justify-content-between mb-4">       
              </div>    
            </div>
          </div>
        </div>

        
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded mx-auto p-3">
              <img className="img-fluid rounded" src="img/classes-1.jpg" alt=" " />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Art &amp; Drawing</a>
              <div className="d-flex align-items-center justify-content-between mb-4">       
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
      <div className="bg-cus-light rounded">
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
</div>

    </>

  )
}

export default Home