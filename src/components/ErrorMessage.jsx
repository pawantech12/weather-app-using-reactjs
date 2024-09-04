import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-center text-red-500 mt-4">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
