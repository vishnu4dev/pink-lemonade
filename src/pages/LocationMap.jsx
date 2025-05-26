import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../style/LocationMap.css";

const containerStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "1rem",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
};

const center = {
  lat: 25.2866,
  lng: 51.5332,
};

const LocationMap = () => {
  return (
    <section id="contact" className="location-section ">
      <h2>Visit Us</h2>
      <p>123 Shisha Street, London, UK</p>
      <div className="map-container">
        <iframe
          title="Pink Lemonade Lounge Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.6500000000001!2d-0.0102118!3d51.5116017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603e81904463f%3A0xfdeaa94c6047fb88!2sPink%20Lemonade%2C%20249B%20E%20India%20Dock%20Rd%2C%20London%20E14%200EG!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
