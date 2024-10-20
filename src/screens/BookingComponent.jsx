import React, { useState } from "react";
import "../styles/BookingComponent.css";
import NavBar from "../components/NavBar";

const BookingComponent = () => {
  const dummyEvents = [
    {
      EventID: 1,
      FacilityID: 1,
      Name: "Tshwane Jazz Festival",
      Description: "A festival celebrating jazz music.",
      Date: "2024-11-01",
      Time: "18:00:00",
      TicketPrice: 150.0,
      Capacity: 500,
      EventType: "Festival",
      Location: "Freedom Park, Tshwane",
    },
    {
      EventID: 2,
      FacilityID: 2,
      Name: "Art Exhibition",
      Description: "An exhibition showcasing local artists.",
      Date: "2024-11-05",
      Time: "10:00:00",
      TicketPrice: 100.0,
      Capacity: 300,
      EventType: "Exhibition",
      Location: "Pretoria Art Museum",
    },
    {
      EventID: 3,
      FacilityID: 3,
      Name: "Rock Concert",
      Description: "Live rock music from top bands.",
      Date: "2024-11-10",
      Time: "19:00:00",
      TicketPrice: 200.0,
      Capacity: 1000,
      EventType: "Concert",
      Location: "Loftus Versfeld Stadium",
    },
    {
      EventID: 4,
      FacilityID: 4,
      Name: "Cultural Day",
      Description: "A celebration of Tshwane's diverse cultures.",
      Date: "2024-11-15",
      Time: "12:00:00",
      TicketPrice: 50.0,
      Capacity: 400,
      EventType: "Festival",
      Location: "Tshwane Events Centre",
    },
    {
      EventID: 5,
      FacilityID: 5,
      Name: "Tech Conference",
      Description: "A conference for tech enthusiasts.",
      Date: "2024-11-20",
      Time: "09:00:00",
      TicketPrice: 250.0,
      Capacity: 600,
      EventType: "Conference",
      Location: "Centurion Convention Centre",
    },
    {
      EventID: 6,
      FacilityID: 1,
      Name: "Food Festival",
      Description: "A festival showcasing local cuisine.",
      Date: "2024-11-25",
      Time: "11:00:00",
      TicketPrice: 80.0,
      Capacity: 800,
      EventType: "Festival",
      Location: "Market at The Sheds",
    },
    {
      EventID: 7,
      FacilityID: 2,
      Name: "Photography Workshop",
      Description: "A hands-on workshop for aspiring photographers.",
      Date: "2024-12-01",
      Time: "10:00:00",
      TicketPrice: 120.0,
      Capacity: 50,
      EventType: "Workshop",
      Location: "Tshwane University of Technology",
    },
    {
      EventID: 8,
      FacilityID: 3,
      Name: "Classical Music Evening",
      Description: "An evening of classical music performances.",
      Date: "2024-12-05",
      Time: "19:30:00",
      TicketPrice: 180.0,
      Capacity: 300,
      EventType: "Concert",
      Location: "Pretoria City Hall",
    },
    {
      EventID: 9,
      FacilityID: 4,
      Name: "Dance Competition",
      Description: "A competition showcasing local dance talent.",
      Date: "2024-12-10",
      Time: "14:00:00",
      TicketPrice: 75.0,
      Capacity: 200,
      EventType: "Competition",
      Location: "Tshwane Events Centre",
    },
    {
      EventID: 10,
      FacilityID: 5,
      Name: "Health and Wellness Fair",
      Description: "An event focusing on health and wellness.",
      Date: "2024-12-15",
      Time: "09:00:00",
      TicketPrice: 50.0,
      Capacity: 500,
      EventType: "Fair",
      Location: "Centurion Mall",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [numberOfAttendees, setNumberOfAttendees] = useState(1);
  const [bookingStatus, setBookingStatus] = useState("");

  const handleBooking = () => {
    if (selectedEvent) {
      setBookingStatus(
        `Booking confirmed for ${numberOfAttendees} attendee(s) for the event "${selectedEvent.Name}".`
      );
    } else {
      setBookingStatus("Please select an event to book.");
    }
  };

  return (
    <div className="booking-page">
      <NavBar />
      <h1>Book a Facility in Tshwane</h1>
      <div className="event-list">
        <h2>Available Events</h2>
        <ul>
          {dummyEvents.map((event) => (
            <li key={event.EventID}>
              <h3>{event.Name}</h3>
              <p>{event.Description}</p>
              <p>Date: {event.Date}</p>
              <p>Time: {event.Time}</p>
              <p>Location: {event.Location}</p>
              <p>Price: R{event.TicketPrice.toFixed(2)}</p>
              <button onClick={() => setSelectedEvent(event)} >
                Select Event
              </button>
              <br />
              <hr />
            </li>
          ))}
        </ul>
      </div>
      {selectedEvent && (
        <div>
          <h2>Booking for: {selectedEvent.Name}</h2>
          <label>
            Number of Attendees:
            <input
              type="number"
              value={numberOfAttendees}
              onChange={(e) => setNumberOfAttendees(e.target.value)}
              min="1"
            />
          </label>
          <div className="actions">
            <button onClick={handleBooking} style={{}}>
              Book Now
            </button>
          </div>
        </div>
      )}
      {bookingStatus && <p>{bookingStatus}</p>}
    </div>
  );
};

export default BookingComponent;
