import { useState } from "react";

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      setError("Masukkan nama kota terlebih dahulu.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        setError(data.error || "Gagal mengambil data cuaca.");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Perkiraan Cuaca</h1>
      <input
        type="text"
        placeholder="Masukkan nama kota"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Cari</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>Cuaca di {weather.city.name}</h2>
          <p>Suhu: {weather.list[0].main.temp}°C</p>
          <p>Cuaca: {weather.list[0].weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
