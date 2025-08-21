import React from "react";
import { Link } from "react-router-dom";

function DonateCTA() {
  return (
    <section className="text-center py-5">
      <h2>Help Us Do More</h2>
      <p>Every donation helps us care for cows, heal communities, and protect sacred knowledge for future generations.</p>
      <Link to="/donate" className="btn btn-success">Donate Now →</Link>
    </section>
  );
}

export default DonateCTA;
