import { useState, useEffect } from "react";
import HomeScreen from "./components/HomeScreen";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ErrorMessage from "./components/ErrorMessage";
import { Hero } from "./components/Hero";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  const fetchWeather = async (city = null) => {
    try {
      let url;
      if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_APP_OPENWHEATHER_API_KEY
        }`;
      } else {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
            import.meta.env.VITE_APP_OPENWHEATHER_API_KEY
          }`;

          const response = await fetch(url);

          if (!response.ok) throw new Error("Unable to fetch weather data");

          const data = await response.json();

          setWeatherData(data);
          console.log("current loc dt", weatherData);
          setError("");
        }, handleError);
        return;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const handleError = (error) => {
    setError("Unable to retrieve your location.");
  };

  useEffect(() => {
    if (showWeather) fetchWeather();
  }, [showWeather]);

  return (
    <div className="bg-custom-grey-dark flex flex-col items-center">
      {!showWeather ? (
        <HomeScreen onStart={() => setShowWeather(true)} />
      ) : (
        <div className="flex flex-col w-3/5 items-center min-h-screen ">
          <SearchBar onSearch={fetchWeather} />
          {weatherData && <Hero weatherData={weatherData} />}

          <ErrorMessage message={error} />
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>
      )}
    </div>
  );
};

export default App;
