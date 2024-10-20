import React from "react";
import "./SearchPage.css"; // For styles

const SearchPage = () => {
  return (
    <div className="search-page">
      <header className="header">
        <div className="logo">Logo</div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="search" />
      </div>

      <div className="activities-section">
        <h3>Available activities</h3>
        <div className="activities-grid">
          <img src="image1.jpg" alt="Activity 1" />
          <img src="image2.jpg" alt="Activity 2" />
          <img src="image3.jpg" alt="Activity 3" />
        </div>
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

export default SearchPage;
