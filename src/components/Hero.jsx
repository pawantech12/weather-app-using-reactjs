import PropTypes from "prop-types";
import sun from "../img/sun.png";
import cloud from "../img/cloud.png";
import rain from "../img/rain.png";
import snow from "../img/snow.png";
import fog from "../img/fog.png";
import thunderstorm from "../img/thunderstorm.png";
export const Hero = ({ weatherData }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return sun;
      case "Clouds":
        return cloud;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Thunderstorm":
        return thunderstorm;
      case "Fog":
        return fog;
      default:
        return sun;
    }
  };
  return (
    <section className="flex justify-around items-center w-full">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-white mb-2">
          {weatherData?.name}
        </h2>
        <span className="text-gray-400 font-medium">
          {weatherData?.weather?.[0]?.main}
        </span>
        <span className="text-4xl font-bold text-white mt-5">
          {weatherData?.main?.temp}°C
        </span>
      </div>
      <div>
        <img
          src={getWeatherIcon(weatherData?.weather?.[0]?.main)}
          alt=""
          className="w-60"
        />
      </div>
    </section>
  );
};
Hero.propTypes = {
  weatherData: PropTypes.object.isRequired,
};
