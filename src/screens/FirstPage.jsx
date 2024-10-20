// src/components/FirstPage.js
import React from "react";
import "../styles/FirstPage.css";

const FirstPage = () => {
  const items = [
    { image: "path/to/image1", price: "R100" },
    { image: "path/to/image2", price: "R100" },
    { image: "path/to/image3", price: "R100" },
    { image: "path/to/image4", price: "R100" },
    { image: "path/to/image5", price: "R100" },
  ];

  return (
    <div className="first-page">
      <header>
        <div className="profile">
          <img src="path/to/profile" alt="profile" className="profile-img" />
          <span>Lucia Malake</span>
        </div>
        <div className="icons">
          <img src="path/to/icon1" alt="icon1" />
          <img src="path/to/icon2" alt="icon2" />
        </div>
      </header>

      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={`item${index}`} />
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <footer className="footer-icons">
        <img src="path/to/footer-icon1" alt="footer-icon1" />
        <img src="path/to/footer-icon2" alt="footer-icon2" />
        <img src="path/to/footer-icon3" alt="footer-icon3" />
      </footer>
    </div>
  );
};

export default FirstPage;
