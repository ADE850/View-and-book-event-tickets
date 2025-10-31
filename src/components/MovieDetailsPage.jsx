import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Фильм #{id}</h2>
      <p>Описание фильма — короткое, чтобы не перегружать страницу.</p>
      <button onClick={handleBooking}>Выбрать кинотеатр и забронировать</button>
    </div>
  );
}
