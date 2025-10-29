import { useParams } from "react-router-dom";
import { useState } from "react";

export default function BookingPage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Бронирование фильма #{id}</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert("Бронь оформлена!"); }}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <button type="submit">Забронировать</button>
      </form>
    </div>
  );
}
