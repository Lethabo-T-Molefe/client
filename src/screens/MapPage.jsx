import React from "react";
import "../styles/MapPage.css"; // For styles

const MapPage = () => {
  return (
    <div className="map-page">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="ratings">★★★★☆</div>
      </header>

      <div className="map-section">
        <img src="map.jpg" alt="Map" />
      </div>

      <footer className="footer">
        <div className="footer-icon"></div>
        <div className="footer-icon"></div>
        <div className="footer-icon"></div>
        <div className="footer-icon"></div>
      </footer>
    </div>
  );
};

export default MapPage;
