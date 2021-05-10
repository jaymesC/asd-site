import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import 'aos/dist/aos.css';

/**
 * section component
 *
 * @return {JSX.Element}
 **/
export default function Section2() {
  const SectionA = styled.section`
    /* margin-left:18rem; */
    display: flex;
    font-family: 'inter';
    font-size: 12px;
    padding-right: 40px;
  `;

  const SectionB = styled.section`
    padding-bottom: 200px;
  `;
  const StyledH1 = styled.h1`
    font-weight: 580;
    font-family: 'inter';
    color: rgb(50, 48, 51);
    font-size: 30px;
  `;
  const Text = styled.p`
    padding-top: 6rem;
    font-family: 'inter';
    margin-right: 2rem;
    font-size: 18px;
    line-height: 30px;
  `;

  const StyledRow = styled.section`
    margin-top: 10rem;
    margin-left: 15rem;
    display: flex;
    color: rgb(50, 48, 51);
  `;


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
          <SectionA>
            <h3>OURGOALS</h3>
            <div>
              <img src="icon2.JPG" alt="" style={{ paddingLeft: '14rem', paddingTop: '11px' }} />
            </div>
          </SectionA>
          <StyledH1>
            Enabling the sport leaders <br /> to work in a simpler <br /> smarter way.
          </StyledH1>
        </div>
        <SectionB>
          <Text>
            We work with sporting directors to help build a
            <br /> community of practice to build the skills and <br />{' '}
            capabilities essential for the clubs future. We <br /> support members through an executive <br /> programme
            of activities to enhance their <br /> professional development. Our focus is to help <br /> sporting
            directors work in a simpler, smarter way.
          </Text>
        </SectionB>
      </StyledRow>
    </>
  );
}
