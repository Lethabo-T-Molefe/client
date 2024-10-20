// src/components/ChatbotPage.js
import React from "react";
import "../styles/ChatbotPage.css";
import NavBar from "../components/NavBar";

const ChatbotPage = () => {
  return (
    <div className="chatbot-page">
      <NavBar/>
      <div className="chatbot-logo">
        <img src="/path/to/chatbot-logo.png" alt="Chatbot" />
      </div>
      <div className="welcome-message">
        <h2>ARABA</h2>
        <p>Ask a bot, we’ll help you plan your event</p>
      </div>
      <button className="proceed-button">→</button>
    </div>
  );
};

export default ChatbotPage;
