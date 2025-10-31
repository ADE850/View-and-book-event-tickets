import { useParams } from 'react-router-dom';
import { useState } from 'react';

function BookingPage() {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', tickets: 1 });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // пока просто выводим данные в консоль
  };

  return (
    <div>
      <h2>Book Event {eventId}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="tickets" type="number" min="1" onChange={handleChange} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingPage;
