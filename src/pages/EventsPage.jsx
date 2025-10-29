import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "Inception", date: "2025-10-30" },
  { id: 2, title: "Interstellar", date: "2025-11-01" },
  { id: 3, title: "Oppenheimer", date: "2025-11-05" },
];

export default function EventsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🎬 Доступные фильмы</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} — {event.date}
            {" "}
            <Link to={`/book/${event.id}`}>Забронировать</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

