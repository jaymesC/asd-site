import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * NavButton component
 *
 * @param {Object} props
 * @return {JSX.Element}
 **/
export default function NavButton(props) {
  const Button = styled.button`
    background-color: #e64b38;
    transition: 0.5s;
    &:hover {
      background-color: #d12e1a;
    }
    color: #fff;
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 30px;
    border: #ed6050;
    cursor: pointer;
    font-size: 14px;
  `;
  return (
    <div>
      <Button>{props.children}</Button>
    </div>
  );
}


// Button props
NavButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
