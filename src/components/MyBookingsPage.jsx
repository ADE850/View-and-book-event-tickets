import React, { useEffect, useState } from "react";
import "./MyBookingsPage.css";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  const handleClear = () => {
    localStorage.removeItem("bookings");
    setBookings([]);
  };

  return (
    <div className="my-bookings-page">
      <h2>Мои брони</h2>

      {bookings.length === 0 ? (
        <p>У вас пока нет бронирований.</p>
      ) : (
        <div className="bookings-list">
          {bookings.map((b, i) => (
            <div key={i} className="booking-card">
              <p><strong>Фильм ID:</strong> {b.id}</p>
              <p><strong>Имя:</strong> {b.name}</p>
              <p><strong>Мест:</strong> {b.seats}</p>
              <p><strong>Время:</strong> {b.time}</p>
            </div>
          ))}
        </div>
      )}

      {bookings.length > 0 && (
        <button onClick={handleClear} className="clear-btn">
          Очистить все брони
        </button>
      )}
    </div>
  );
}
