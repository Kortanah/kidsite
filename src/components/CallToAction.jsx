import React from 'react'

function CallToAction() {
  return (
    <>
      <div>
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">Become A Teacher</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Become A Teacher</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Call To Action Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" style={{objectFit: 'cover'}} />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Become A Teacher</h1>
              <p className="mb-4">Are you passionate about shaping young minds and making a lasting impact? Join our team at Creme de la Creme, where we believe in nurturing both children and educators. 
                As a teacher with us, you’ll have the opportunity to inspire curiosity, creativity, and growth in a supportive and enriching environment. 
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
</div>

    </>
  )
}

export default CallToAction