// src/components/CheckoutPage.js
import React from "react";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <header>
        <div className="profile">
          <img src="path/to/profile" alt="profile" className="profile-img" />
          <span>Lucia Malake</span>
        </div>
        <div className="notification">
          <img src="path/to/notification" alt="notification" />
        </div>
      </header>

      <div className="ticket-price">
        <h2>R100</h2>
      </div>

      <form className="payment-form">
        <input type="number" placeholder="enter card number" />
        <input type="number" placeholder="cvv" />
        <button className="checkout-button">Checkout</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
