import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Cinema Booking</h1>
      <p>Browse events and book your tickets!</p>
      <Link to="/events">View Events</Link>
    </div>
  );
}

export default HomePage;
