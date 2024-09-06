import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  // Handle search on button click or Enter key press
  const handleSearch = () => {
    if (city) onSearch(city);
  };

  // Trigger search on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-3 justify-center my-6 w-full">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for key press
        placeholder="Enter city name"
        className="px-4 h-12 py-2 text-white rounded-lg focus:outline-none w-full bg-custom-grey-light"
      />
      <button
        onClick={handleSearch}
        className="bg-custom-blue text-white py-2 px-4 font-medium rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
