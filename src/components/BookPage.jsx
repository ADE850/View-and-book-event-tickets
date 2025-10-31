import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookPage.css";

export default function BookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      id,
      name,
      seats,
      time: new Date().toLocaleString(),
    };

    // Сохраняем бронирование в localStorage
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...saved, booking]));

    alert("Бронирование успешно добавлено!");
    navigate("/mybookings"); // после брони переходим на страницу "Мои брони"
  };

  return (
    <div className="book-page">
      <h2>Бронирование фильма #{id}</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Ваше имя:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Количество мест:
          <input
            type="number"
            min="1"
            max="10"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </label>

        <button type="submit">Забронировать</button>
      </form>
    </div>
  );
}
