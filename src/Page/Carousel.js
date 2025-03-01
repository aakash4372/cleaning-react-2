import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import ReviewSlider from "./review";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./indicator";
import { FaSearchLocation } from "react-icons/fa";


export default function Carousel() {
  useEffect(() => {
    AOS.init();
  });
  const services = [
    {
      title: "EXPERT CLEANING FOR EVERY SPACE",
      content:
        "We offer professional cleaning services for your home, office, or commercial space.",
    },
    {
      title: "ECO-FRIENDLY & SAFE PRODUCTS",
      content:
        "We use non-toxic, eco-friendly cleaning products that are safe for your family, pets, and employees while protecting the environment.",
    },
    {
      title: "HIGHLY SKILLED & TRAINED TEAM",
      content:
        "Our highly trained and experienced cleaning professionals guarantee excellent results every time.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div>
      <ScrollToTop />
      <div
        id="mainCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={`${process.env.PUBLIC_URL}/img/medium-shot-people-cleaning-building.jpg`}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <h2>Welcome to Chinna Cleaning Facility</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={`${process.env.PUBLIC_URL}/img/medium-shot-woman-cleaning-home.jpg`}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <h2>Welcome to Chinna Cleaning Facility</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={`${process.env.PUBLIC_URL}/img/person-taking-care-office-cleaning (1).jpg`}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <h2>Welcome to Chinna Cleaning Facility</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="who-we-are mt-0"
          style={{
            background:
              "linear-gradient(to bottom, #E8F9FF,rgb(205, 231, 240),#E8F9FF, white)",
          }}
        >
          <h2
            class="text-center heading"
            data-aos="zoom-in"
            data-aos-duration="1050"
          >
            <span class="line"></span> Who We Are<span class="line"></span>
          </h2>

          <div class="container my-5">
            <div
              class="row align-items-center"
              data-aos="fade-left"
              data-aos-duration="1050"
            >
              <div class="col-12 col-md-6 col-lg-6">
                <img
                  src={`${process.env.PUBLIC_URL}/img/girl.jpg`}
                  alt="cleaing-pic"
                  class="img-fluid rounded who-we-are-img"
                />
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <h2 className="fw-bold">Welcome to Chinna Cleaning Facility</h2>
                <p className="pt-2">
                  Chinna Cleaning Facility offers exceptional cleaning services
                  for residential, office, and commercial spaces. Our
                  professional team utilizes high-quality products and advanced
                  techniques to create a clean and hygienic environment. With 11
                  years of experience in Coimbatore, we are{" "}
                  <Link to="/about" className=" d-inline">
                    more...
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="who-we-serve-section py-2 mb-3" id="WhoWeServe">
        <h2
          className="text-center heading mb-5"
          data-aos="zoom-in"
          data-aos-duration="1050"
        >
          <span className="line"></span> Service<span className="line"></span>
        </h2>

        <Slider {...settings} className="services  container">
          {services.map((service, index) => (
            <div key={index} className="p-3" data-aos="zoom-in">
              <Card className="service-card service-card-details text-center pt-4">
                <h5 className="service-title text-uppercase mb-3">
                  {service.title}
                </h5>
                <p className="service-content">{service.content}</p>
              </Card>
            </div>
          ))}
        </Slider>
        <div className="d-flex container justify-content-end mt-2 see-more pe-5">
          <Link to="/services" className="see-more-link">
            See More
          </Link>
        </div>
      </div>

      <ReviewSlider />

      <div>
        <footer
          className="footer-section py-4"
          id="contact"
        >
          <Container>
            <Row className="gap-4 gap-md-0">
              <Col
                md={3}
                className="text-start text-white d-flex flex-column align-items-start mb-4 mb-md-0"
              >
                <div className="logo-circle">
                  <img
                    src={`${process.env.PUBLIC_URL}/logo/logo.jpg`}
                    alt="Logo"
                    className="footer-logo"
                  />
                </div>
                <p className="text-start mt-3">
                  China Cleaning Facility ensures a clean, hygienic environment
                  with 11 years of expertise, offering reliable residential,
                  office, and commercial cleaning services. We prioritize
                  professionalism and safety, creating welcoming spaces for
                  all.
                </p>
              </Col>
              <Col md={3} className="text-start text-white mb-4 mb-md-0">
                <h5 className="footer-heading">Useful Links</h5>
                <ul className="list-unstyled d-flex flex-column gap-3 align-items-start">
                  <li>
                    <a href="#home" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-white text-decoration-none"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#WhoWeServe"
                      className="text-white text-decoration-none"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses"
                      className="text-white text-decoration-none"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reviews"
                      className="text-white text-decoration-none"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={3} className="text-start text-white">
                <h5 className="footer-heading">Contact Us</h5>

                {/* Phone */}
                <p className="d-flex align-items-center justify-text">
                  <FaPhone className="me-2 calls flex-shrink-0" />
                  <a
                    href="tel:+919788525856"
                    className="text-white ps-1 text-decoration-none"
                  >
                    +91 9788525856
                  </a>
                </p>

                {/* Email */}
                <p className="d-flex align-items-center justify-text">
                  <FaEnvelope className="me-2 flex-shrink-0" />
                  <a
                    href="mailto:chinnaclgfacility@gmail.com"
                    className="text-white ps-2 text-decoration-none"
                  >
                    chinnaclgfacility@gmail.com
                  </a>
                </p>

                {/* Address */}
                <p className="d-flex align-items-start justify-text">
                  <FaMapMarkerAlt className="me-2 flex-shrink-0 mt-1" />
                  <span className="ps-2">
                    No 204 Maruthakutti street, Rathinapuri, Coimbatore - 641027
                  </span>
                </p>

                <p className="d-flex align-items-start justify-text">
                  <FaSearchLocation className="me-2 flex-shrink-0 mt-1" />
                  <span className="ps-2">
                    Coimbatore, Tirupur, Pollachi, Mettupalayam, Coimbatore,
                    Palakkad, Ooty
                  </span>
                </p>
              </Col>

              <Col md={3} className="text-start text-white">
                <h5 className="footer-heading">Follow Us</h5>
                <div className="social-icons d-flex gap-3">
                  <a
                    href="https://www.instagram.com/chinna_cleaning_facility?igsh=dWR2MTd1OG9yN3Bq"
                    target="_blank"
                    without
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/logo/instagram.png`}
                      alt="Instagram"
                      width="30"
                      height="30"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/share/163a4sovT5"
                    target="_blank"
                    without
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/logo/facebook.png`}
                      alt="Facebook"
                      target="_blank"
                      without
                      rel="noreferrer"
                      width="30"
                      height="30"
                    />
                  </a>
                  <a
                    href="https://youtube.com/@chinnacleaningfacility?si=TEXo-4S7m8fk9Nuc"
                    target="_blank"
                    without
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/logo/youtube.png`}
                      alt="Facebook"
                      width="30"
                      height="30"
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col className="text-center text-white">
                <p className="mb-0">
                  &copy; {new Date().getFullYear()}
                  <a
                    href="https://bmtechx.in"
                    target="_blank"
                    without
                    rel="noreferrer"
                    className="text-white text-decoration-none ms-1"
                  >
                    BMTECHx
                  </a>
                  . All Rights Reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
}
