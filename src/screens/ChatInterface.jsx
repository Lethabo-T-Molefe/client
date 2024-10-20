// src/components/ChatInterface.js
import React, { useState } from "react";
import "../styles/ChatInterface.css";
import NavBar from "../components/NavBar";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you?", sender: "bot" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "user" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-interface">
      <NavBar/>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSendMessage}>→</button>
      </div>
    </div>
  );
};

export default ChatInterface;
