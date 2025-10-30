// src/components/ButtonsPanel.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonsPanel.css";

const movies = [
  { name: "Человек-Бензопила", link: "/movie/1", img: "https://i.imgur.com/zfJ9QkT.jpeg" },
  { name: "Чёрный телефон 2", link: "/movie/2", img: "https://i.imgur.com/buR5glV.jpeg" },
  { name: "Дюна: Часть Вторая", link: "/movie/3", img: "https://i.imgur.com/FkFVh2E.jpeg" },
  { name: "Оппенгеймер", link: "/movie/4", img: "https://i.imgur.com/hmXwl1b.jpeg" },
  { name: "Интерстеллар", link: "/movie/5", img: "https://i.imgur.com/QcA3D9Z.jpeg" },
  { name: "Начало", link: "/movie/6", img: "https://i.imgur.com/mWm7pvd.jpeg" },
  { name: "Джокер", link: "/movie/7", img: "https://i.imgur.com/5zKPEdQ.jpeg" },
  { name: "Бегущий по лезвию 2049", link: "/movie/8", img: "https://i.imgur.com/2W3h4iN.jpeg" },
  { name: "Такси 5", link: "/movie/9", img: "https://i.imgur.com/mkAtQyb.jpeg" },
  { name: "Форсаж X", link: "/movie/10", img: "https://i.imgur.com/Sdks2eF.jpeg" },
  { name: "Мстители: Финал", link: "/movie/11", img: "https://i.imgur.com/1xXavqI.jpeg" },
  { name: "Стражи Галактики 3", link: "/movie/12", img: "https://i.imgur.com/4H2B9nO.jpeg" },
  { name: "Дэдпул и Росомаха", link: "/movie/13", img: "https://i.imgur.com/Nc4oqiU.jpeg" },
  { name: "Хроники Нарнии", link: "/movie/14", img: "https://i.imgur.com/ItJXmcQ.jpeg" },
  { name: "Бэтмен", link: "/movie/15", img: "https://i.imgur.com/w9Csoht.jpeg" },
  { name: "Чёрная Вдова", link: "/movie/16", img: "https://i.imgur.com/TMJj49Q.jpeg" },
  { name: "Доктор Стрэндж", link: "/movie/17", img: "https://i.imgur.com/YvR9X6Z.jpeg" },
  { name: "Железный человек", link: "/movie/18", img: "https://i.imgur.com/Fb7V2rN.jpeg" },
];

export default function ButtonsPanel() {
  return (
    <div className="buttons-panel-container">
      {movies.map((movie) => (
        <Link key={movie.name} to={movie.link} className="movie-card">
          <div className="movie-image">
            <img src={movie.img} alt={movie.name} />
          </div>
          <div className="movie-title">{movie.name}</div>
        </Link>
      ))}
    </div>
  );
}
