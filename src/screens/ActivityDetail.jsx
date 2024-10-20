import React from "react";
import "./ActivityDetail.css"; // For styles

const ActivityDetail = () => {
  return (
    <div className="activity-detail">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="ratings">★★★★☆</div>
      </header>

      <div className="video-section">
        <img src="video-thumbnail.jpg" alt="Video" />
        <button className="play-button">▶</button>
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

export default ActivityDetail;
