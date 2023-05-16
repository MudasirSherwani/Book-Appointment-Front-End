/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, event, title }) => (
  <button
    title={title}
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
  title: PropTypes.string,
};

export default Button;
