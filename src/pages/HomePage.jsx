// src/pages/HomePage.jsx

import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSnippet from "../components/AboutSnippet";
import CoreActivities from "../components/CoreActivities";
import AppointmentCallout from "../components/AppointmentCallout";
import DonateCTA from "../components/DonateCTA";
import TestimonialHighlight from "../components/TestimonialHighlight";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <CoreActivities />
      <AppointmentCallout />
      <TestimonialHighlight />
      <DonateCTA />
    </>
  );
}

export default HomePage;
