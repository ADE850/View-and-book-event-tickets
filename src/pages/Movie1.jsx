    import React from "react";

    export default function Movie1() {
    return (
        <div style={{ padding: "50px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        {/* Заголовок фильма */}
        <h1 style={{ marginBottom: "30px" }}>Человек-Бензопила</h1>

        {/* Трейлер */}
        <div
            style={{
            width: "640px",
            height: "360px",
            margin: "0 auto 30px auto",
            backgroundColor: "#000",
            borderRadius: "8px",
            overflow: "hidden",
            }}
        >
            <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/3xt_JfN7d8c" // <-- сюда вставляй ссылку на YouTube трейлер
            title="Человек-Бензопила трейлер"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>

        {/* Краткое описание */}
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "16px", lineHeight: "1.5" }}>
            Добро пожаловать! Здесь вы можете посмотреть трейлер фильма "Человек-Бензопила" и забронировать билет.
            В будущем здесь можно добавить описание, актёров, расписание сеансов и т.д.
        </p>
        </div>
    );
    }
