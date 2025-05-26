import React from "react";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import LocationMap from "./LocationMap";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <section id="about" className="home-section">
        <About />
      </section>
      <div className="section-divider" />
      <section id="menu" className="home-section">
        <Menu />
      </section>
      <section id="contact" className="home-section">
        <LocationMap />
      </section>
      <div className="section-divider" />
      <section id="contact" className="home-section">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
