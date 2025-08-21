import React from 'react';
import './../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h2 className='contact-title'>Contact Us</h2>
          {/* <p>Email: contact@sanaathantrust.org</p> */}
          <p style={{ color: "#b88a44", fontWeight: "600", fontSize: "1.2rem" }}>Appointments </p>
          
    <p>+91 83339 37666, +91 83339 37686, +91 84999 21555
          </p><br></br>
          <p style={{ color: "#b88a44", fontWeight: "600", fontSize: "1.2rem" }}>Medical Suggestions  </p> <p>Whatsapp : +91 91544 37666</p>
          <br></br>
          <p style={{ color: "#b88a44", fontWeight: "600", fontSize: "1.2rem" }}>Address</p> <p>
            ILTD Colony, AR Nagar, Kothapeta, Chirala, Andhra Pradesh. 523157.</p>
        </div>
        {/* <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
        </div> */}
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Sanaathan Jeevan Trust. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;