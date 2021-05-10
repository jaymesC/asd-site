import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

/**
 * @description this is a plain button component with custom styles for the app
 *
 * @param {object} props the props contains a children field that accepts
 * all renderable elements.
 * @return {JSX.Element}
 * @constructor
 */

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Button = (props) => {
  return (
    <div>
      <StyledButton>{props.children}</StyledButton>
    </div>
  );
};

// Button props
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Button;
