// import {
//   WiDaySunny,
//   WiCloudy,
//   WiRain,
//   WiSnow,
//   WiThunderstorm,
//   WiFog,
// } from "react-icons/wi";
import PropTypes from "prop-types";
const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-sm mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Weather</h2>
          <p className="text-lg text-gray-500">
            {weatherData?.weather?.[0]?.main}
            {weatherData?.name}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-4xl font-bold">{weatherData?.main?.temp}°C</h3>
        <p className="text-gray-500">
          Feels like {weatherData?.main?.feels_like}°C
        </p>
      </div>

      <div className="mt-4">
        <p className="text-lg">
          <strong>Humidity:</strong> {weatherData?.main?.humidity}%
        </p>
        <p className="text-lg">
          <strong>Wind Speed:</strong> {weatherData?.wind?.speed} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;

WeatherDisplay.propTypes = {
  weatherData: PropTypes.object.isRequired,
};
