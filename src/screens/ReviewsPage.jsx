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
  {
    id: 3,
    image: "/path/to/image3.jpg",
    rating: 3,
    description: "It was good, but could be improved.",
  },
  {
    id: 4,
    image: "/path/to/image4.jpg",
    rating: 5,
    description: "Had an amazing time!",
  },
  {
    id: 5,
    image: "/path/to/image5.jpg",
    rating: 2,
    description: "Not what I expected.",
  },
  {
    id: 6,
    image: "/path/to/image6.jpg",
    rating: 4,
    description: "Really enjoyed the atmosphere.",
  },
  {
    id: 7,
    image: "/path/to/image7.jpg",
    rating: 5,
    description: "The best event I've been to!",
  },
  {
    id: 8,
    image: "/path/to/image8.jpg",
    rating: 3,
    description: "Average experience.",
  },
  {
    id: 9,
    image: "/path/to/image9.jpg",
    rating: 4,
    description: "Well organized and fun.",
  },
  {
    id: 10,
    image: "/path/to/image10.jpg",
    rating: 5,
    description: "Incredible performances!",
  },
  {
    id: 11,
    image: "/path/to/image11.jpg",
    rating: 4,
    description: "Great venue, great people.",
  },
  {
    id: 12,
    image: "/path/to/image12.jpg",
    rating: 5,
    description: "Highly recommend this event!",
  },
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
