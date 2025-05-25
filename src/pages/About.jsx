import React from 'react';
import ImageAsset from "../assets/about.jpg"

const About = () => {
  return (
    <div className="bg-gradient-to-br from-pink-500/10 to-yellow-300/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-yellow-300 mb-6 text-center font-serif">About Pink Lemonade</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <img
            src={ImageAsset}
            alt="Pink Lemonade Shisha Lounge"
            className="rounded-3xl w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg text-pink-100 leading-relaxed">
            Nestled in the heart of the city, Pink Lemonade Shisha Lounge offers an unparalleled escape into a world of luxury and relaxation. Our vibrant yet serene ambiance, infused with the zest of pink and yellow hues, invites you to unwind with premium shisha blends, crafted mocktails, and delectable bites. Inspired by the finest global lounges, we create moments of indulgence and connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

