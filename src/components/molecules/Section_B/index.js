import React, { useEffect } from 'react';
import 'normalize.css';
import 'aos/dist/aos.css';
import {StyledArticleA, StyledArticleB, StyledH1, StyledText, StyledRow} from './styles'

/**
 * section component
 *
 * @return {JSX.Element}
 **/
 const SectionB = () => {
  
  let AOS;

  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      once: true,
      duration: 900,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <>
      <StyledRow>
        <div>
          <StyledArticleA>
            <h3>OURGOALS</h3>
            <div>
              <img src="icon2.JPG" alt="" style={{ paddingLeft: '14rem', paddingTop: '11px' }} />
            </div>
          </StyledArticleA>
          <StyledH1>
            Enabling the sport leaders <br /> to work in a simpler <br /> smarter way.
          </StyledH1>
        </div>
        <StyledArticleB>
          <StyledText>
            We work with sporting directors to help build a
            <br /> community of practice to build the skills and <br />{' '}
            capabilities essential for the clubs future. We <br /> support members through an executive <br /> programme
            of activities to enhance their <br /> professional development. Our focus is to help <br /> sporting
            directors work in a simpler, smarter way.
          </StyledText>
        </StyledArticleB>
      </StyledRow>
    </>
  );
}

export default SectionB;
