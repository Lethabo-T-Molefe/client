import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ReviewsPage from './screens/ReviewsPage';
import ChatbotPage from './screens/ChatbotPage';
import ChatInterface from './screens/ChatInterface';
import DatePickerPage from './screens/DatePicker';
import VerifyPaymentPage from './screens/VerifyPaymentPage';
import CheckoutPage from './screens/CheckoutPage';
import FirstPage from './screens/FirstPage';
import MapPage from './screens/MapPage';
import SearchPage from './screens/SearchPage';
import BookingComponent from './screens/BookingComponent';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/chat-interface" element={<ChatInterface />} />
          <Route path="/date-picker" element={<DatePickerPage />} />
          <Route path="/verify-payment" element={<VerifyPaymentPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/first-page" element={<FirstPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/bookings" element={<BookingComponent/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
