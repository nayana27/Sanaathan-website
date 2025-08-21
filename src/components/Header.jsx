import React from "react";
import { Link } from "react-router-dom";
// import "./Header.css"; // add custom styles

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Sanaathan Jeevan Trust" height="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/doctors">Doctors</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/appointment">Book Appointment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item">
              <Link className="btn btn-success ms-3" to="/donate">Donate</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
