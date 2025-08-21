import React from "react";
import { Link } from "react-router-dom";

function AppointmentCallout() {
  return (
    <section className="bg-light py-5 text-center">
      <h2>Your Wellbeing Matters</h2>
      <p>Consult with our experienced doctors for holistic, traditional health solutions tailored to you.</p>
      <Link to="/appointment" className="btn btn-primary">Book Now →</Link>
    </section>
  );
}

export default AppointmentCallout;
