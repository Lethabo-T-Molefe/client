// src/components/DatePicker.js
import React, { useState } from "react";
import { Calendar } from "react-calendar"; // Optionally use react-calendar
import '../styles/DatePicker.css';
import NavBar from "../components/NavBar";

const DatePickerPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="date-picker-page">
      <NavBar/>
      <h2>Choose a Date</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) =>
          view === "month" && <span>{date.getDate()}</span>
        }
      />
      <div className="actions">
        <button>Prev</button>
        <button>Next</button>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default DatePickerPage;
