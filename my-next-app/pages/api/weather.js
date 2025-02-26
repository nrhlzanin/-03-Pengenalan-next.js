export default async function handler(req, res) {
    const { city } = req.query;
  
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }
  
    const apiKey = "e5c038b17fc80a6740ed3e065caaff84"; // Gantilah dengan API Key Anda
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Error response from OpenWeatherMap:", data);
        return res.status(response.status).json({ error: data.message });
      }
  
      console.log("Data Cuaca:", data); // Untuk debugging
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  