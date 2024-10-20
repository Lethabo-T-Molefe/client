// src/components/VerifyPaymentPage.js
import React from "react";
import "../styles/VerifyPaymentPage.css";
import NavBar from "../components/NavBar";

const VerifyPaymentPage = () => {
  return (
    <div className="verify-page">
      <NavBar/>
      <div className="verify-container">
        <button className="verify-button">Verify Payment</button>
      </div>
    </div>
  );
};

export default VerifyPaymentPage;
