import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

const Footer = () => {
  const StyledFooter = styled.div`
    display: flex;
    /* justify-content:space-between; */
    font-family: 'inter';
    padding-top: 5rem;
    color: rgb(79, 84, 90);
    padding-left: 5rem;
    padding-right: 0rem;
  `;

  const StyledLinks = styled.section`
    /* display:flex;
     justify-content:space-between; */
  `;

  const StyledNavLink = styled.section`
    display: flex;
    justify-content: space-between;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 100;
    border-bottom: 4px solid #555e7d;
    margin-left: 3rem;
  `;

  const StyledH5 = styled.h5`
    padding-right: 6.2rem;
    font-weight:400;
  `;

  const StyledLocation = styled.div`
    padding-bottom: 100px;
    display: flex;
    justify-content: space-between;
    margin-left: 3rem;
  `;

  const StyledP = styled.p`
    font-size: 14px;
  `;

  const StyledImg = styled.img`
    margin-top: 1rem;
    padding-left: 3.6rem;
  `;

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
