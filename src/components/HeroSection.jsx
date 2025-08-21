import React from "react";
// import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section text-center d-flex align-items-center justify-content-center">
      <video autoPlay muted loop className="hero-bg-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-content text-white">
        <h1>Sanaathan Jeevan Trust — Preserving Traditions, Enriching Lives</h1>
        <p>Rooted in ancient wisdom, dedicated to holistic wellness and sustainable community service.</p>
        <div className="hero-buttons">
          <a href="/appointment" className="btn btn-primary me-3">Book Appointment</a>
          <a href="/donate" className="btn btn-outline-light">Donate Now</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
