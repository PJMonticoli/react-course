import PropTypes from "prop-types";

export function Title({ text }) {
  return (
    <h1 className="uppercase text-center text-white mb-2 font-bold opacity-50 font-sans">
      {text}
    </h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
