import React from 'react';
import '../styles/main.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#lifestyle">The Sanaathan Lifestyle</a></li>
        <li><a href="#doctors">Our Doctors</a></li>
        <li><a href="#initiatives">Initiatives</a></li>
        {/* <li><a href="#appointment">Appointment</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;