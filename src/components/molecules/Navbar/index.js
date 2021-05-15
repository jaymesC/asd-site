import React from 'react';
import 'normalize.css';
import { FaLock } from 'react-icons/fa';
import Button from './../../atoms/NavButton';
import {StyledNavbar, StyledLinks, StyledNavLinks} from './styles'

/**
 * navbar component
 *
 * @return {JSX.Element}
 **/
const Navbar = () => {

  return (
    <StyledNavbar>
      <><img src="logo.JPG" alt="" /></>
      <StyledLinks>
        <StyledNavLinks to="/about">Goals</StyledNavLinks>
        <StyledNavLinks to="/projects"> Membership</StyledNavLinks>
        <StyledNavLinks to="/">Benefits</StyledNavLinks>
        <StyledNavLinks to="/projects"> Blog</StyledNavLinks>
        <StyledNavLinks to="/projects"> Team</StyledNavLinks>
        <StyledNavLinks to="/projects">
          {' '}
          <Button>
            <FaLock /> MEMBERS LOGIN
          </Button>
        </StyledNavLinks>
      </StyledLinks>
    </StyledNavbar>
  );
}

export default Navbar;
