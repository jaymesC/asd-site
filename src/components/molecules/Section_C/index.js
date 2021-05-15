import React, { useEffect } from 'react';
import {StyledContainer, StyledNews, StyledMember, StyledH2, StyledButton, StyledPhotos, StyledWrapper, StyledSubscribe, StyledInput, StyledEmail, StyledSignup} from './styles'
import 'normalize.css';
import 'aos/dist/aos.css';

/**
 * section component
 * @returns {JSX.Element}
 */

const Section3 = () => {
  
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

  return (
    <>
      <StyledContainer>
        <StyledNews>
          <h5>LATEST NEWS</h5>
          <div>
            <img src="icon3.JPG" alt="" style={{ paddingLeft: '13.8rem', paddingTop: '14px' }} />
          </div>
        </StyledNews>
        <StyledMember>
          <StyledH2>
            Become a member of ASD for unlimited <br /> access to all resources, articles and insights.
          </StyledH2>
          <div>
            <StyledButton>MEMBERSHIP ENQUIRY</StyledButton>
          </div>
        </StyledMember>

        <StyledPhotos>
          <img src="footerpic1.JPG" alt="" data-aos="slide-up" data-aos-duration="1200" />
          <img src="footerpic2.JPG" alt="" data-aos="slide-up" data-aos-duration="1800" />
          <img src="footerpic3.JPG" alt="" data-aos="slide-up" data-aos-duration="2200" />
        </StyledPhotos>
      </StyledContainer>

      <StyledWrapper>
        <StyledSubscribe>
          <h5>ASSOCIATION OF SPORTING DIRECTORS NEWSLETTER</h5>
          <div>
            <img src="icon.JPG" alt="" style={{ paddingLeft: '11rem', paddingTop: '14px' }} />
          </div>
        </StyledSubscribe>
        <StyledInput>
          <h2>
            Subscribe to our newsletters to <br /> not miss our latest news
          </h2>
          <div>
            <StyledEmail type="text" placeholder="Email Address" placeholderTextColor="white" />
          </div>
          <div>
            <StyledSignup>SIGNUP</StyledSignup>
          </div>
        </StyledInput>
      </StyledWrapper>
    </>
  );
};

export default Section3;
