import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, children, onClickEvent }) => (
  <button
    id={id}
    className="toolbar__item"
    type="button"
    onClick={onClickEvent}
  >
    {children}
  </button>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
