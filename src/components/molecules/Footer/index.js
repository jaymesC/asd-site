import React from 'react';
import 'normalize.css';
import {StyledFooter, StyledLinks, StyledNavLink, StyledH5, StyledLocation,StyledP, StyledImg} from './styles'


/**
 * footer component
 *
 * @return {JSX.Element}
 **/

const Footer = () => {
 

  return (
    <StyledFooter>
      <div>
        <StyledImg src="footerLogo.JPG" alt="" />
      </div>
      <StyledLinks>
        <StyledNavLink>
          <StyledH5>Benefits</StyledH5>
          <StyledH5>Goals </StyledH5>
          <StyledH5>Membership</StyledH5>
          <StyledH5>Team </StyledH5>
          <StyledH5>Blog</StyledH5>
          <h5>Membership Enquiry </h5>
        </StyledNavLink>

        <StyledLocation>
          <div>
            <h5>OFFICE</h5>
            <StyledP>
              Suite 9, Rockfield House, 512 Darwen Road,
              <br /> Bromley Cross, Bolton, Lancashire, BL7 9DX
            </StyledP>
          </div>
          <div>
            <h5>LEGAL</h5>
            <StyledP>
              {' '}
              This site is protected by Google reCAPTCHA. Privacy Policy.
              <br />
              © Association of Sporting Directors. 2005 – 2020. All Rights
              <br /> Reserved.
            </StyledP>
          </div>
          <div>
            <h5>FOLLOW US</h5>
            <img src="twitter.JPG" alt="" style={{ paddingRight: '10px' }} />
            <img src="linkedin.JPG" alt="" />
          </div>
        </StyledLocation>
      </StyledLinks>
    </StyledFooter>
  );
};

export default Footer;
