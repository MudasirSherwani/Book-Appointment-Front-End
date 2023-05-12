import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, event }) => (
  <button
    type="button"
    className="main--btn"
    onClick={event}
  >
    { text }
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Button;
