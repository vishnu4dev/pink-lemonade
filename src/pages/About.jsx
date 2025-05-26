import React from 'react';
import "../style/About.css"
import ImageAsset from "../assets/pinkLemonad.jpg"

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-image-wrapper">
        <img src={ImageAsset} alt="Shisha Lounge" className="about-image" />
      </div>
      <div className="about-text">
        <h2>Welcome to Pink Lemonade</h2>
        <p>
          Immerse yourself in a luxurious ambiance where modern elegance meets traditional shisha artistry.
          At Pink Lemonade, we pride ourselves on offering an exquisite experience curated for connoisseurs of flavor and atmosphere alike.
        </p>
        <p>
          From handcrafted cocktails to our signature pink-inspired shisha blends, every detail is designed to delight your senses.
        </p>
      </div>
    </section>
  );
};

export default About;

