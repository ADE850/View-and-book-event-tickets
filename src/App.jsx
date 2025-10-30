import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FilmsPage from "./components/FilmsPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Add from "./components/Add";
import NewsPage from "./pages/NewsPage"; // 🔹 добавили импорт

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FilmsPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/news" element={<NewsPage />} /> {/* 🔹 новый путь */}
      </Routes>
    </Layout>
  );
}
