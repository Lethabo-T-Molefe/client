import votreke from "../assets/vortreke.jpeg";
import union from "../assets/union.jpeg";
import groen from "../assets/groen.jpeg";
import React from "react";
import freedom from "../assets/freedom.jpeg";
import reit from "../assets/reit.jpeg";
import "../styles/SearchPage.css"; 
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";// Assuming you have styles for your page

const SearchPage = () => {
    const activitiesInTshwane = [
      {
        id: 1,
        name: "Voortrekker Monument",
        image: votreke,
        description: "A historical monument.",
        coordinates: { lat: -25.7765, lng: 28.1754 },
      },
      {
        id: 2,
        name: "Union Buildings",
        image: union,
        description: "The official seat of the South African government.",
        coordinates: { lat: -25.7402, lng: 28.2123 },
      },
      {
        id: 3,
        name: "Freedom Park",
        image: freedom,
        description: "A national heritage site.",
        coordinates: { lat: -25.7647, lng: 28.1928 },
      },
      // {
      //   id: 4,
      //   name: "Pretoria National Botanical Garden",
      //   image: "botanical-garden.jpg",
      //   description: "A 76-hectare botanical garden.",
      //   coordinates: { lat: -25.7408, lng: 28.2702 },
      // },
      // {
      //   id: 5,
      //   name: "Loftus Versfeld Stadium",
      //   image: "loftus.jpg",
      //   description: "A multi-purpose stadium.",
      //   coordinates: { lat: -25.7515, lng: 28.2224 },
      // },
      {
        id: 6,
        name: "Rietvlei Nature Reserve",
        image: reit,
        description: "A large urban nature reserve.",
        coordinates: { lat: -25.8825, lng: 28.2794 },
      },
      // {
      //   id: 7,
      //   name: "Moreleta Kloof Nature Reserve",
      //   image: "moreleta-kloof.jpg",
      //   description: "A nature reserve with scenic hiking trails.",
      //   coordinates: { lat: -25.8298, lng: 28.2926 },
      // },
      // {
      //   id: 8,
      //   name: "Ditsong National Museum of Natural History",
      //   image: "ditsong.jpg",
      //   description: "A museum showcasing natural history exhibits.",
      //   coordinates: { lat: -25.7471, lng: 28.1888 },
      // },
      // {
      //   id: 9,
      //   name: "Hazel Food Market",
      //   image: "hazel-food-market.jpg",
      //   description: "A popular food market.",
      //   coordinates: { lat: -25.7707, lng: 28.2703 },
      // },
      {
        id: 10,
        name: "Groenkloof Nature Reserve",
        image: groen,
        description: "A nature reserve offering various activities.",
        coordinates: { lat: -25.7993, lng: 28.2088 },
      },
    ];
  const handleBook = (activityName) => {
    alert(`You have booked for ${activityName}`);
  };

  const handleViewDetails = (activityName) => {
    alert(`Viewing more details for ${activityName}`);
  };

  return (
    <div className="search-page">
      <header className="header">
        <div className="logo">UbuntuXperience</div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search activities" />
      </div>

      <div className="activities-section">
        <h3>Available activities in Tshwane</h3>
        <div className="activities-grid">
          {activitiesInTshwane.map((activity) => (
            <div key={activity.id} className="activity-card">
              <img
                src={activity.image}
                alt={activity.name}
                className="activity-image"
              />
              <h4>{activity.name}</h4>
              <p>{activity.description}</p>
              <div className="activity-buttons">
                <button
                  onClick={() => handleBook(activity.name)}
                  className="book-btn"
                >
                  Book
                </button>
                <button
                  onClick={() => handleViewDetails(activity.name)}
                  className="details-btn"
                >
                  View More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="map-section">
        <h3>Map</h3>
        <MapContainer
          center={[-25.7479, 28.2293]}
          zoom={12}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {activitiesInTshwane.map((activity) => (
            <Marker
              key={activity.id}
              position={[activity.coordinates.lat, activity.coordinates.lng]}
            >
              <Popup>{activity.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <footer className="footer">
        <div className="footer-icon">Icon1</div>
        <div className="footer-icon">Icon2</div>
        <div className="footer-icon">Icon3</div>
        <div className="footer-icon">Icon4</div>
      </footer>
    </div>
  );
};

export default SearchPage;
