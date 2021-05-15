import React, { useEffect, useState } from 'react';
import 'normalize.css';
import { StyledDiv, StyledSection, StyledNewSection, StyledH1, StyledH4, StyledH5, StyledA, StyledImage1, StyledCSection, StyledWriteUp, StyledPicSection, StyledBSection,StyledImg1, StyledCounter, StyledBrand, StyledBrandLogo, StyledSvg, StyledLink, StyledWrapper, StyledMessage } from './styles'
import 'aos/dist/aos.css';
import Button from '../../atoms/Button';
// import Carousel from  '../../organisms/Carousel';

/**
 * section component
 * 
 * @return {JSX.Element}
 **/
 const FirstSection = () => {

  let AOS;

  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  /* Counter useState */
  const [count, setCount] = useState(1);

  // Add Button function
  const addHandler = () => {
    if (count <=3)
      setCount(count +1)  
  }

  // Subtraction Button function
  const handler = () => {
    if (count >=2)
    setCount(count -1)   
  }

  return (
    <>
      <StyledDiv>
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" fill="#F1F5F6">
          {/* eslint-disable-next-line max-len */}
          <path d="M74.7.4c-1.8 0-3 1.7-2.5 3.4l1.4 4.3L80.3 29C83 37.3 89.5 44.4 99 49.4c1.3.7 2.5 1.3 3.7 1.8 1.5.7 1.8 2.7.5 3.8l-2.2 1.8c-.2.1-1.5 1.2-3.3 3.6-1 1.3-2.8 1.6-4.2.8-16.2-9.4-20.4-18.8-20.7-19.3L60.7 9.7 59 5.1c-.6-1.5-2.2-2.4-3.8-2-1.6.4-3.2.9-4.7 1.4-20.4 7.1-36.9 22.9-44.8 43-.6 1.4-1.1 2.8-1.5 4.3-.6 1.7.7 3.4 2.5 3.5h4.5l21.7.2h.4c12.9 0 22.6-8.3 28.3-14.7.8-1 2.4-.7 2.9.5l1.3 3.5c.1.2.8 1.9 2.6 4.5.7 1 .5 2.4-.4 3.2-14.4 13-25 14.2-25.5 14.2L8.4 68.4l-5.1.3C1.7 68.8.5 70 .4 71.6.3 72.7.3 73.9.3 75v1.6c.5 22.3 10.8 42.3 26.8 55.7 1.3 1.1 2.6 2.1 3.9 3.1 1.3.9 3 .3 3.5-1.2l1.6-4.7 6.8-20.4c4.2-12.4-.7-24.4-5.2-31.9-.7-1.1.1-2.5 1.4-2.6l3.7-.2c.2 0 2.5-.2 6.2-1.4 1.1-.4 2.3.2 2.8 1.2 7.8 17.8 5.5 28.2 5.4 28.7l-9.5 33-1.4 4.9c-.4 1.5.3 3.1 1.8 3.6 1.5.6 3.1 1.2 4.7 1.6 7 2.2 14.4 3.4 22.1 3.4 14.3 0 27.6-4 39-11 1.4-.9 2.9-1.8 4.2-2.8 1.2-.9 1.2-2.7 0-3.6l-4-3-16.8-12.8c-10.3-7.9-23-7.3-31.5-5.5-1.4.3-2.6-1-2.2-2.4l1-3.3c.1-.2.6-2.4.7-6.3 0-1.1.9-2.1 2-2.2 19.1-1.7 28.2 3.6 28.6 3.9l28.5 19.3 4.2 2.8c1.3.9 3 .6 4-.6 1.1-1.3 2.1-2.6 3-4 8.7-12.2 13.8-27.1 13.8-43.2 0-6-.7-11.8-2.1-17.4-.4-1.6-.8-3.2-1.3-4.7s-2.3-2.1-3.6-1.2l-4 2.7-17.5 12.1c-7.3 5-12.2 13.1-14.3 23.7-.3 1.5-.5 3-.7 4.4-.2 1.5-1.9 2.3-3.2 1.4l-2.7-1.8c-.2-.1-1.6-1.1-4.5-2.1-1.3-.5-2-1.8-1.8-3.2 3.8-18.7 11.5-25.8 11.8-26.1l26.6-21.9 4.1-3.4c1.1-.9 1.3-2.4.5-3.6-1-1.5-2-2.9-3.1-4.3-12.8-16.6-32.5-27.7-54.8-29l-4.1.1zm13 26.2L83 12c-.5-1.7.9-3.3 2.6-3 16.2 2.6 30.5 11 40.7 23.1 1.1 1.3.9 3.2-.4 4.2l-11.2 9.2c-1 .8-2.2 1-3.4.7-5.9-1.8-19.7-7.3-23.6-19.6zM33.2 47.7h-.3L18 47.6c-1.9 0-3.1-2-2.2-3.7 7.4-14.1 19.8-25.2 34.7-31.1 1.5-.6 3.2.2 3.8 1.7l5.2 13.6c.4 1.1.3 2.4-.4 3.4-3.6 4.9-13.1 16.2-25.9 16.2zm2.5 58.9l-4.9 14.7c-.5 1.4-2.3 1.9-3.3.8C16.2 110.7 9 95.2 8.2 78.2c-.1-1.1.8-2 1.9-2.1l15.5-.8c1 0 1.9.4 2.5 1.1 3.5 4.7 11.9 17.6 7.6 30.2zm57.1 15.8l12.2 9.3c1.1.9 1 2.6-.3 3.3-8.9 4.4-19 7-29.7 7-6.2 0-12.2-.8-17.9-2.4-1.2-.3-1.8-1.5-1.5-2.7l4.3-15c.3-.9.9-1.6 1.8-1.9 5.5-1.9 20.5-5.8 31.1 2.4zm-9-33.3c-4.6-.6-10.3-.8-17-.2-1.3.1-2.4-.7-2.7-2-1-4.6-2.6-9.9-5.2-16-.5-1.1-.1-2.3.9-2.9 3.9-2.3 8.4-5.5 13.2-9.9.9-.8 2.3-.8 3.2 0 3.6 3.3 8.3 6.8 14.5 10.3.9.5 1.2 1.5.8 2.4-1.9 4.3-3.7 9.6-5 16.2-.2 1.4-1.4 2.3-2.7 2.1zm43.1 23l-11.9-8c-1-.7-1.6-1.8-1.6-3.1 0-6.1 1.3-21 12-28.3l12.3-8.5c1.4-1 3.3-.1 3.5 1.6.4 3 .6 6 .6 9.1 0 13.4-3.9 25.8-10.7 36.3-.9 1.5-2.8 1.9-4.2.9z"></path>
        </StyledSvg>
      </StyledDiv>
      <StyledSection>
        <StyledH5>
          SUPPORTING, CONNECTING & <br />
          DEVELOPING SPORTING DIRECTORS
        </StyledH5>
        <StyledNewSection>
          <StyledH1>
            Association of <br /> Sporting Directors
          </StyledH1>
          <StyledLink>
            <StyledA>
              <img src="arrow.JPG" alt="" />
            </StyledA>
            <StyledH4>MEET THE TEAM</StyledH4>
          </StyledLink>
        </StyledNewSection>
      </StyledSection>

      <StyledImage1 src="New-hero-aspect-ratio-1920-875.png" alt="" />
      <StyledWrapper>
        <StyledCSection>
          <StyledWriteUp>
            <h5>
              WHAT WE DO <img src="icon1.JPG" alt="" style={{ paddingLeft: '200px', paddingTop: '2px' }} />{' '}
            </h5>{' '}
            <br />
            <StyledMessage>
              Our membership network <br /> provides pioneering <br /> Sporting Directors with the <br /> opportunity to
              connect <br /> with other leaders in the <br /> global football industry.
              <StyledCounter>
        <><img src="left.JPG" alt="" onClick={handler} /></>
        <><img src="right.JPG" alt="" onClick={addHandler} style={{paddingLeft:'30px', paddingRight:'30px'}}/></>
        <p>{count} /4</p>
        </StyledCounter>
            </StyledMessage>
            
          </StyledWriteUp>
          <StyledPicSection>
            <StyledImg1 src="card1.JPG" alt="" data-aos="slide-up" data-aos-duration="3000" />
            <img src="card44.JPG" alt="" data-aos="slide-up" data-aos-duration="3000" />
          </StyledPicSection>
        </StyledCSection>

        <StyledBSection>
          <Button>MORE ABOUT OUR BENEFITS</Button>
        </StyledBSection>
        <StyledBrand>
          <h4>OUR PARTNERS</h4>
          <div>
            <img src="icon.JPG" alt="" style={{ paddingLeft: '80px', paddingTop: '18px' }} />
          </div>
          <h1 style={{ paddingLeft: '80px', paddingTop: '-10px' }}>
            Trusted by global brands <br /> within the sport sector.
          </h1>
        </StyledBrand>
        <StyledBrandLogo>
          <img src="hudl.png" alt="" style={{ paddingRight: '40px' }} data-aos="fade" data-aos-duration="900" />
          <img src="shoosmith.png" alt="" style={{ paddingRight: '40px' }} data-aos="fade" data-aos-duration="1400" />
          <img src="sri.png" alt="" style={{ paddingRight: '40px' }} data-aos="fade" data-aos-duration="1800" />
          <img src="dawbell.png" alt="" data-aos="fade" data-aos-duration="2200" />
        </StyledBrandLogo>
      </StyledWrapper>
    </>
  );
}

export default FirstSection;
