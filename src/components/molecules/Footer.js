import React from "react"
import styled from "styled-components"
import "normalize.css"

export default function Footer() {
  const Footer = styled.div`
    display: flex;
    /* justify-content:space-between; */
    font-family: "inter";
    padding-top: 5rem;
    color: rgb(79, 84, 90);
    padding-left: 5rem;
    padding-right: 0rem;
  `

  const Links = styled.section`
    /* display:flex;
  justify-content:space-between; */
  `

  const NavLink = styled.section`
    display: flex;
    justify-content: space-between;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 100;
    border-bottom: 4px solid #555e7d;
    margin-left: 3rem;
  `

  const H5 = styled.h5`
    padding-right: 6rem;
  `

  const Location = styled.div`
  padding-bottom: 100px;
  display:flex;
  justify-content:space-between;
  margin-left: 3rem;
  `

  const P = styled.p`
  font-size:16px;
  `

  const Img = styled.img`
  margin-top: 1rem;
  `


  return (
    <Footer>
      <div>
        <Img src="footerLogo.JPG" alt="" />
      </div>
      <Links>
        <NavLink>
          <H5>Benefits</H5>
          <H5>Goals </H5>
          <H5>Membership</H5>
          <H5>Team </H5>
          <H5>Blog</H5>
          <h5>Membership Enquiry </h5>
        </NavLink>

          <Location>
            <div>
            <h5>OFFICE</h5>
            <P>Suite 9, Rockfield House, 512 Darwen Road, <br/> Bromley Cross, Bolton, Lancashire, BL7 9DX</P>
            </div>
            <div>
              <h5>LEGAL</h5>
              <P> This site is protected by Google reCAPTCHA. Privacy Policy. <br/>
     © Association of Sporting Directors. 2005 – 2020. All Rights <br/> Reserved.</P>
            </div>
            <div>
              <h5>FOLLOW US</h5>
              <img src="twitter.JPG" alt="" style={{paddingRight:'10px'}}/>
              <img src="linkedin.JPG" alt=""/>
            </div>
          </Location>
      </Links>
    </Footer>
    
    
  
    
    // 
    
    
  )
}
