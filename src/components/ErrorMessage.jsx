import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-center text-white text-lg font-medium bg-custom-grey-light mt-4 w-full py-2 rounded-lg ">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
