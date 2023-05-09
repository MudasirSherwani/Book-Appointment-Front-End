/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button
    type="button"
    className="main--text"
  >
    { text }
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
