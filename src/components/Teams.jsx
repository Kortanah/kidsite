import React from 'react'

function Teams() {

    const teamlist = [
        {imageSrc: "img/team-1.jpg ", name: "Full Name", fbLink: "", twitterLink :"", insta:"", position:"Designation" },
        {imageSrc: "img/team-1.jpg ", name: "Full Name", fbLink: "", twitterLink :"",  insta:"", position:"" },
        {imageSrc: "img/team-1.jpg ", name: "Full Name", fbLink: "", twitterLink :"",  insta:"", position:"" },
    ]



  return (
    <>
       <div>
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">Teachers</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Teachers</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}

  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Popular Teachers</h1>
        <p>Meet the heart of Creme de la Creme—our dedicated and talented teachers! Known for their creativity, warmth, and expertise, our teachers make learning fun and engaging for every child. Their commitment to excellence and personal connection with students has earned them the love and respect of both children and parents alike.</p>
      </div>
      <div className="row g-4">
        
        { teamlist.map((item,index)=>
        <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item position-relative">
          <img className="img-fluid rounded-circle w-75" src={item.imageSrc} alt=""/>
          <div className="team-text">
            <h3>{item.name}</h3>
            <p>{item.position}</p>
            <div className="d-flex align-items-center">
              <a className="btn btn-square btn-primary mx-1" href={item.fbLink}><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square btn-primary  mx-1" href={item.twitterLink}><i className="fab fa-twitter" /></a>
              <a className="btn btn-square btn-primary  mx-1" href={item.insta}><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
        ) }
        
        
        
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Teams