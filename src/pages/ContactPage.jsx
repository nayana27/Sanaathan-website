import React from "react";

function ContactPage() {
  return (
    <div className="container my-5">
      <h1>Contact Us</h1>
      <p>Address: #123, Traditional Street, Heritage Town, India</p>
      <p>Phone: +91-9876543210</p>
      <p>Email: contact@sanaathanjeevan.org</p>

      <div className="mb-4">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <form>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" required></textarea>
        </div>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
