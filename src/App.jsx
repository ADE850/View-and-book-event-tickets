// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FilmsPage from "./components/FilmsPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Add from "./components/Add";
import EventsPage from "./pages/EventsPage"; // 🔹 Анонсы фильмов
import NewsPage from "./pages/NewsPage"; // 🔹 Новости
import BookingPage from "./pages/BookingPage"; // 🔹 импорт
import BookPage from "./components/BookPage";
import MyBookingsPage from "./components/MyBookingsPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FilmsPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/announcements" element={<EventsPage />} />
        <Route path="/book/:id" element={<BookPage />} /> {/* 🔹 новая страница */}
        <Route path="/mybookings" element={<MyBookingsPage />} /> {/* 🔹 список броней */}
      </Routes>
    </Layout>
  );
}

