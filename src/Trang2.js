import React from "react";

const Trang2 = () => {
  const champions = [
    {
      id: 1,
      name: "Ahri",
      role: "Pháp Sư / Sát Thủ",
      origin: "Ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    },
    {
      id: 2,
      name: "Yasuo",
      role: "Đấu Sĩ / Sát Thủ",
      origin: "Ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
    },
    {
      id: 3,
      name: "Lux",
      role: "Pháp Sư / Hỗ Trợ",
      origin: "Demacia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
    },
    {
      id: 4,
      name: "Zed",
      role: "Sát Thủ / Đấu Sĩ",
      origin: "Ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
    },
    {
      id: 5,
      name: "Ashe",
      role: "Xạ Thủ / Hỗ Trợ",
      origin: "Freljord",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {champions.map((champ) => (
          <div
            key={champ.id}
            style={{
              position: "relative",
              overflow: "hidden",
              border: "2px solid gold",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0.6)",
              color: "white",
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(255, 215, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255, 215, 0, 0.3)";
            }}
          >
            <img
              src={champ.image}
              alt={champ.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderBottom: "2px solid gold",
              }}
            />
            <div style={{ padding: "15px", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "1.4em",
                  marginBottom: "8px",
                  color: "#FFD700",
                  textShadow: "0 0 10px #FFD700",
                }}
              >
                {champ.name}
              </h2>
              <p style={{ margin: "4px 0" }}>🎯 Vai trò: {champ.role}</p>
              <p style={{ margin: "4px 0" }}>🏰 Vùng: {champ.origin}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
