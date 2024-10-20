// src/components/ReviewsPage.js
import React from "react";
import '../styles/ReviewsPage.css';
import NavBar from "../components/NavBar";
const reviews = [
  {
    id: 1,
    image: "/path/to/image1.jpg",
    rating: 4,
    description: "Great place to visit!",
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    rating: 5,
    description: "Absolutely fantastic!",
  },
  // Add more reviews as needed
];

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <img src={review.image} alt="Event" />
    <div className="stars">
      {"★".repeat(review.rating)}
      {"☆".repeat(5 - review.rating)}
    </div>
    <p>{review.description}</p>
  </div>
);

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <NavBar />
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsPage;
