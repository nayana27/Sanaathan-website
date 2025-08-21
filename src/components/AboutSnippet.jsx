import React from "react";
import { Link } from "react-router-dom";

function AboutSnippet() {
  return (
    <section className="container my-5 text-center">
      <h2>Who We Are</h2>
      <p>Sanaathan Jeevan Trust is dedicated to traditional wellness, compassionate service, and the preservation of sacred, time-honoured practices for the benefit of all.</p>
      <Link to="/about" className="btn btn-link">Learn More →</Link>
    </section>
  );
}

export default AboutSnippet;
