import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const MyOffcanvas = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Top Navbar with Location Links */}
      <div className="top-navtab d-none d-lg-block d-flex justify-content-end align-items-center">
        <div className="d-flex justify-content-end align-items-center gap-3 me-4">
          <p className="mb-0">Coimbatore <span className="top-navtab-span">|</span></p>
          <p className="mb-0">Tirupur <span className="top-navtab-span">|</span></p>
          <p className="mb-0">Pollachi <span className="top-navtab-span">|</span></p>
          <p className="mb-0">Mettupalayam <span className="top-navtab-span">|</span></p>
          <p className="mb-0">Palakkad <span className="top-navtab-span">|</span></p>
          <p className="mb-0">Ooty</p>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className={`bg-light shadow py-2 main-navbar ${isScrolled ? "fixed-top" : ""}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <img
              src={`${process.env.PUBLIC_URL}/logo/logo.jpg`}
              alt="chinna-pic"
              height="60"
            />
          </Navbar.Brand>

          {/* Desktop Navigation Links */}
          <Nav className="mx-auto d-none gap-4 d-lg-flex">
            <NavLink to="/" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Services</NavLink>
            <NavLink to="/our-work" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Our Work</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Contact</NavLink>
          </Nav>

          {/* Offcanvas Toggle Button for Mobile */}
          <FiMenu size={28} className="d-lg-none" onClick={handleShow} style={{ cursor: "pointer" }} />
        </Container>
      </Navbar>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" className={({ isActive }) => `nav-link my-2 ${isActive ? "active-link" : ""}`} onClick={handleClose}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link my-2 ${isActive ? "active-link" : ""}`} onClick={handleClose}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link my-2 ${isActive ? "active-link" : ""}`} onClick={handleClose}>Services</NavLink>
            <NavLink to="/our-work" className={({ isActive }) => `nav-link my-2 ${isActive ? "active-link" : ""}`} onClick={handleClose}>Our Work</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link my-2 ${isActive ? "active-link" : ""}`} onClick={handleClose}>Contact</NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyOffcanvas;
