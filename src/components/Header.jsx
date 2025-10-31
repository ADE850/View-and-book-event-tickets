import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3163/3163478.png"
            alt="Cinema Logo"
            className="logo"
          />
          <h1 className="cinema-name">Киномир</h1>
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Фильмы</Link>
        <Link to="/events">Анонсы</Link>
        <Link to="/news">Новости</Link>
      </nav>

      <div className="header-right">
        <div className="lang-switch">
          <button>RU</button> | <button>EN</button>
        </div>
        <Link to="/mybookings" className="login-btn">Ваши брони</Link>
      </div>
    </header>
  );
}
