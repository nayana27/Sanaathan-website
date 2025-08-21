import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import LifestyleSection from './components/LifestyleSection';
import Footer from './components/Footer';
import './styles/main.css';
import AboutUs from "./components/AboutUs";
import InitiativesSection from './components/InitiativesSection'; // Add this import

const App = () => {
  return (
    <div className="app">
      <div class="trust-title-box">
      <section className="banner-section">
        <h1 className="trust-title">Sanaathan Jeevan Trust</h1>
        {/* <Navbar /> */}
        <Banner />
      </section>
      </div>
      {/* <LifestyleSection /> */}
      <InitiativesSection /> 
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default App;