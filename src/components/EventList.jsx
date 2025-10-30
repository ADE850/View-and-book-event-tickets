import { Link } from 'react-router-dom';

const testEvents = [
  { id: 1, title: "Movie 1", date: "2025-11-01" },
  { id: 2, title: "Movie 2", date: "2025-11-05" },
];

function EventList() {
  return (
    <div>
      {testEvents.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <Link to={`/booking/${event.id}`}>Book Ticket</Link>
        </div>
      ))}
    </div>
  );
}

export default EventList;
