import PropTypes from "prop-types";
import { FaTemperatureQuarter, FaWind } from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import { MdVisibility } from "react-icons/md";
import { TbSunset2 } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
const WeatherDisplay = ({ weatherData }) => {
  // Function to convert Unix timestamp to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  return (
    <div className="rounded-lg p-6 w-full mx-auto mt-5 grid gap-5 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      <div className="bg-custom-grey-light p-5 rounded-lg">
        <span className="flex items-center gap-2 text-gray-400 font-medium">
          <FaTemperatureQuarter className="text-xl" />
          <p className="uppercase">Temperature</p>
        </span>
        <h4 className="ms-5 text-2xl font-bold text-white mt-2">
          {weatherData?.main?.temp}°C
        </h4>
      </div>
      <div className="bg-custom-grey-light p-5 rounded-lg">
        <span className="flex items-center gap-2 text-gray-400 font-medium">
          <FaWind className="text-xl" />
          <p className="uppercase">Wind</p>
        </span>
        <h4 className="ms-5 text-2xl font-bold text-white mt-2">
          {weatherData?.wind?.speed} Km/h
        </h4>
      </div>
      <div className="bg-custom-grey-light p-5 rounded-lg">
        <span className="flex items-center gap-2 text-gray-400 font-medium">
          <WiHumidity className="text-xl" />
          <p className="uppercase">Humidity</p>
        </span>
        <h4 className="ms-5 text-2xl font-bold text-white mt-2">
          {weatherData?.main?.humidity}%
        </h4>
      </div>
      <div className="bg-custom-grey-light p-5 rounded-lg">
        <span className="flex items-center gap-2 text-gray-400 font-medium">
          <MdVisibility className="text-xl" />
          <p className="uppercase">Visibility</p>
        </span>
        <h4 className="ms-5 text-2xl font-bold text-white mt-2">
          {(weatherData?.visibility / 1000).toFixed(2)} Km
        </h4>
      </div>
      <div className="bg-custom-grey-light p-5 rounded-lg">
        <span className="flex items-center gap-2 text-gray-400 font-medium">
          <IoSpeedometer className="text-xl" />
          <p className="uppercase">Pressure</p>
        </span>
        <h4 className="ms-5 text-2xl font-bold text-white mt-2">
          {weatherData?.main?.pressure} hPa
        </h4>
      </div>
      <div className="bg-custom-grey-light p-5 rounded-lg">
        <span className="flex items-center gap-2 text-gray-400 font-medium">
          <TbSunset2 className="text-xl" />
          <p className="uppercase">Sunset</p>
        </span>
        <h4 className="ms-5 text-2xl font-bold text-white mt-2">
          {formatTime(weatherData?.sys?.sunset)}
        </h4>
      </div>
    </div>
  );
};

export default WeatherDisplay;

WeatherDisplay.propTypes = {
  weatherData: PropTypes.object.isRequired,
};
