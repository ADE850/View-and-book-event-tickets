import { Link } from "react-router-dom";

const events = [
  { id: 1, name: "Avengers: Endgame", date: "2025-11-01" },
  { id: 2, name: "Interstellar", date: "2025-11-05" },
  { id: 3, name: "Inception", date: "2025-11-10" },
];

export default function EventList() {
  return (
    <div>
      <h3>Upcoming Movies</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> — {event.date}{" "}
            <Link to={`/booking/${event.id}`}>Book Ticket</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
