import PropTypes from "prop-types";
import HomeImg from "../img/umbrella.png";
const HomeScreen = ({ onStart }) => {
  return (
    <section className="flex items-center justify-evenly min-h-screen bg-custom-grey-dark py-10">
      <div className="w-2/5 bg-custom-grey-light rounded-xl p-8">
        <img src={HomeImg} alt="Home Screen Img" />
      </div>
      <div className="flex w-2/5 flex-col items-center gap-2 text-center">
        <figure className="w-16">
          <img src={HomeImg} alt="Home Screen Img" />
        </figure>
        <h1 className="text-4xl font-bold mt-4 text-white">
          Welcome to the WeApp
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          WeApp is a weather app that provides you with the latest weather
          information.
        </p>
        <button
          onClick={onStart}
          className="mt-6 bg-custom-blue text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HomeScreen;
HomeScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
};
