// src/components/ButtonsPanel.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonsPanel.css";

const movies = [
  { id: 1, name: "Человек-Бензопила", link: "/movie/1", img: "https://cinematica.kg/uploads/movies/d230ac23-3250-4c58-8999-c6a8114d8441.jpg/300/430" },
  { id: 2, name: "Чёрный телефон 2", link: "/movie/2", img: "https://cinematica.kg/uploads/movies/9305b000-8496-45d9-b98e-67f1b2db923c.jpg/300/430" },
  { id: 3, name: "Эки-Жаш", link: "/movie/3", img: "https://cinematica.kg/uploads/movies/3027cbe3-4477-4522-afe6-98be6915b757.jpg/300/430" },
  { id: 4, name: "Напарниктер 3", link: "/movie/4", img: "https://cinematica.kg/uploads/movies/e10048ce-6cac-4999-b468-8095ff0c8dc2.jpg/300/430" },
  { id: 5, name: "Акыркы дем", link: "/movie/5", img: "https://cinematica.kg/uploads/movies/26c14a8e-2948-4800-b192-2b944eff298a.jpeg/300/430" },
  { id: 6, name: "Битир", link: "/movie/6", img: "https://cinematica.kg/uploads/movies/bd5c8d1e-3956-4ff8-8277-5b37c571bc17.jpg/300/430" },
  { id: 7, name: "Bugonia (Eng)", link: "/movie/7", img: "https://cinematica.kg/uploads/movies/3235da2d-7c2b-439e-a112-ec6e772fdb6d.png/300/430" },
  { id: 8, name: "Русалочка", link: "/movie/8", img: "https://cinematica.kg/uploads/movies/7f1d58d8-7715-4545-b18a-6d6394b0af4b.jpg/300/430" },
  { id: 9, name: "Шелби Оукс", link: "/movie/9", img: "https://cinematica.kg/uploads/movies/64aec7c8-1e00-4cef-a538-dfeaaa8ce3fc.jpg/300/430" },
  { id: 10, name: "Финник 2", link: "/movie/10", img: "https://cinematica.kg/uploads/movies/e898f0a0-367e-4ecd-8567-c0c544191c35.jpg/300/430" },
  { id: 11, name: "Бугония", link: "/movie/11", img: "https://cinematica.kg/uploads/movies/8b593ff7-7b15-45c0-bc0f-595153b02f82.jpg/300/430" },
  { id: 12, name: "Детка на драйве", link: "/movie/12", img: "https://cinematica.kg/uploads/movies/91df2e2c-3313-40e7-8a90-6156ae60d355.jpg/300/430" },
  { id: 13, name: "Оболочка", link: "/movie/13", img: "https://cinematica.kg/uploads/movies/27e81cfe-02b3-4769-987a-6ffe9b90b3a9.jpg/300/430" },
  { id: 14, name: "Горыныч", link: "/movie/14", img: "https://cinematica.kg/uploads/movies/91bb3d2e-02ee-4b9a-9330-d1b88c53284d.jpg/300/430" },
  { id: 15, name: "Спрингстин", link: "/movie/15", img: "https://cinematica.kg/uploads/movies/6afc46b7-a3b7-44a4-9076-dd6c0057dabd.jpg/300/430" },
  { id: 16, name: "Волшебный домик", link: "/movie/16", img: "https://cinematica.kg/uploads/movies/695a686c-5c44-43c4-a0f3-c1cc8a46995b.jpeg/300/430" },
  { id: 17, name: "Айша", link: "/movie/17", img: "https://cinematica.kg/uploads/movies/6a8b5131-9495-47e6-b285-1c73d1087ccd.jpeg/300/430" },
  { id: 18, name: "Кудай сактасын", link: "/movie/18", img: "https://cinematica.kg/uploads/movies/632a0645-2a04-47a9-ae18-730d32d9a514.JPG/300/430" },
];

export default function ButtonsPanel() {
  return (
    <div className="buttons-panel-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={movie.link}>
            <div className="movie-image">
              <img src={movie.img} alt={movie.name} />
            </div>
            <div className="movie-title">{movie.name}</div>
          </Link>

          {/* 🔹 Кнопка бронирования */}
          <Link to={`/book/${movie.id}`} className="book-link">
            Забронировать
          </Link>
        </div>
      ))}
    </div>
  );
}
