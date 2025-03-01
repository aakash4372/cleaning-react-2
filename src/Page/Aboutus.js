import React from 'react'
import {Link} from'react-router-dom';

export default function Aboutus() {
  return (
    <div>
      <div>
                <div className="who-we-are mt-0" style={{ background: "linear-gradient(to bottom, #E8F9FF,rgb(205, 231, 240),#E8F9FF, white)" }}>

                    <h2 class="text-center heading" data-aos="zoom-in" data-aos-duration="1050">
                        <span class="line"></span> Who We Are<span class="line"></span>
                    </h2>
                    
                    <div class="container my-5">
                        <div class="row align-items-center" data-aos="fade-left" data-aos-duration="1050">
                            <div class="col-12 col-md-6 col-lg-6">
                                <img src={`${process.env.PUBLIC_URL}/img/girl.jpg`} alt="cleaing-pic" class="img-fluid rounded who-we-are-img" />
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <h2 className="fw-bold">Welcome to Chinna Cleaning Facility</h2>
                                <p className="pt-2">
                                    Chinna Cleaning Facility offers exceptional cleaning services for residential, office, and
                                    commercial spaces. Our professional team utilizes high-quality products and advanced techniques
                                    to create a clean and hygienic environment. With 11 years of experience in Coimbatore, we are {''}
                                    <Link to="/about" className="nav-link d-inline">more...</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
