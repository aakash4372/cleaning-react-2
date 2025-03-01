import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './page.css';
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
    {
        title: "Service 1",
        content: "Chinna cleaning did a wonderful service. It was a 3 bhk empty house and they made all the nook and corner very clean and shine. Very professional and budget friendly. I would recommend them for sure.",
        image: "/img/toilet.jpg"
    },
    {
        title: "Service 2",
        content: "Chinna House Cleaning did an excellent job with our home! They were professional, and thorough, leaving every corner spotless. Highly recommended for anyone looking for reliable and affordable cleaning services.",
        image: "/img/sink.jpg"
    },
    {
        title: "Service 3",
        content: "Service was awesome,I'm very happy and satisfied with their service. I recommend to my friends and family to take their service. So if you are looking for a cleaning service then call Chinna Cleaning and facility....",
        image: "/img/fan.jpg"
    }
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 800, settings: { slidesToShow: 1 } },
        { breakpoint: 700, settings: { slidesToShow: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1 }, },
    ],
};

const ReviewSlider = () => {

      useEffect(() => {
            AOS.init();
          });
    return (
        <div className="review-section py-5" id="WhoWeServe" style={{ background: "linear-gradient(to top, #cde7f0, #cde7f0, #E8F9FF, white)" }}>
            <h2 className="text-center heading mb-5" data-aos="zoom-in" data-aos-duration="1050">
                <span className="line"></span> Reviews<span className="line"></span>
            </h2>

            <Slider {...settings} className="services container" >
                {services.map((service, index) => (
                    <div key={index} className="p-3" data-aos="fade-left" data-aos-duration="1050">
                        <Card className="service-card text-center pt-4 flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Card.Img variant="top" src={service.image} />
                                </div>
                                <div className="flip-card-back">
                                    <Card.Body>
                                        <p className="service-content text-dark">
                                            <FaQuoteLeft size={24} className="text-primary me-2" />
                                            {service.content}
                                            <FaQuoteRight size={24} className="text-primary ms-2" />
                                        </p>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </Slider>

            <div className="d-flex container justify-content-end mt-2 see-more pe-5">
                <Link to="/services" className="see-more-link">See More</Link>
            </div>
        </div>
    );
};

export default ReviewSlider;
