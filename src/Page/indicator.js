import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import arrow icon

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / height) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrollPercentage > 7 && ( // Only show when scrolled beyond 20%
        <div
          style={{
            position: "fixed",
            right: "20px", // Positioned on the right
            bottom: "50px", // Positioned near the bottom
            cursor: "pointer",
            zIndex: 9999,
            opacity: scrollPercentage > 20 ? 1 : 0, // Fades in when scrolling past 20%
            transition: "opacity 0.3s ease-in-out",
          }}
          onClick={scrollToTop}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              background: "#fff",
            }}
          >
            {/* SVG Progress Circle */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              style={{
                position: "absolute",
                transform: "rotate(-90deg)", // Rotates to start from top
              }}
            >
              {/* Background Circle */}
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="4"
              />
              {/* Progress Circle */}
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="#d98324"
                strokeWidth="3"
                strokeDasharray="163.36" // Full circumference (2 * π * r)
                strokeDashoffset={`${163.36 - (scrollPercentage / 100) * 163.36}`}
                strokeLinecap="round"
                transition="stroke-dashoffset 0.2s ease-in-out"
              />
            </svg>

            {/* Arrow Icon */}
            <FaArrowUp size={20} color="#007bff" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
