// src/pages/BookingPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BookingPage.css";

export default function BookingPage() {
  const { id } = useParams(); // Получаем id фильма из URL
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return alert("Введите имя!");
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="booking-success">
        <h2>🎉 Бронирование успешно!</h2>
        <p>
          Спасибо, <strong>{name}</strong>!<br />
          Вы забронировали <strong>{seats}</strong> место(а) на фильм №{id}.
        </p>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <h2>Бронирование билета на фильм №{id}</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Ваше имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
            required
          />
        </label>

        <button type="submit">Забронировать</button>
      </form>
    </div>
  );
}
