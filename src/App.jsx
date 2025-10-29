import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import BookingPage from "./pages/BookingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/book/:id" element={<BookingPage />} />
    </Routes>
  );
}
