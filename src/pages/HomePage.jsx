import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🎟️ View & Book Event Tickets</h1>
      <p>Выбирайте фильмы, смотрите сеансы и бронируйте билеты онлайн!</p>
      <Link to="/events">
        <button>Посмотреть события</button>
      </Link>
    </div>
  );
}
