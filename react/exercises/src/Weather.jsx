import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setWeather(data);
          });
      });
    }
  });
  return (
    <div>
      {weather && <h1>{weather.name}</h1>}
      {weather && <h2>{weather.main.temp}</h2>}
      {weather && <h2>{weather.weather[0].description}</h2>}
    </div>
  );
};

export default Weather;
