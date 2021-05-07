import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import 'aos/dist/aos.css';

const Section3 = () => {
  const Container = styled.div`
    font-family: 'inter';
    padding-top: 10rem;
    background-color: #f1f5f6;
    margin-left: 4rem;
    padding-bottom: 10rem;
    color: #323033;
  `;
  const News = styled.section`
    margin-left: 5rem;
    display: flex;
    /* justify-content:space-evenly; */
  `;

  const Member = styled.section`
    margin-left: 5rem;
    display: flex;
    justify-content: space-between;
    margin-right: 6.4rem;
    margin-bottom: 30px;
  `;

  const H2 = styled.h2`
    font-size: 30px;
    font-weight: 600;
  `;

  const Button = styled.button`
    margin-top: 1.8rem;
    background-color: #e64b38;
    transition: 0.7s;
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
    font-weight: 700;
  `;

  const Photos = styled.section`
    margin-top: 5rem;
    margin-left: 5rem;
    display: flex;
    justify-content: space-between;
    margin-right: 6rem;
  `;

  const Wrapper = styled.div`
    border-top: 4px solid #72c1ad;
    background-color: #442562;
    padding-left: 10rem;
    font-family: 'inter';
    color: #fff;
  `;

  const Subscribe = styled.section`
    display: flex;
    padding-top: 3rem;
  `;

  const Input = styled.section`
    display: flex;
    /* padding-bottom:10rem; */
    justify-content: space-between;
    margin-right: 13rem;
    padding-bottom: 3rem;
  `;

  const Email = styled.input`
    margin-top: 20px;
    padding: 22px 140px 22px 20px;
    background-color: #2e1748;
    &:focus {
      outline: none;
      border: none;
    }
    color: #fff;
    border: none;
  `;

  const Signup = styled(Button)`
    margin-top: 1.3rem;
    width: 150px;
    color: #442562;
    background-color: #fff;
    transition: 0.5s;
    &:hover {
      background-color: #d12e1a;
      color: #fff;
    }
  `;

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
      <Container>
        <News>
          <h5>LATEST NEWS</h5>
          <div>
            <img src="icon3.JPG" alt="" style={{ paddingLeft: '13.8rem', paddingTop: '14px' }} />
          </div>
        </News>
        <Member>
          <H2>
            Become a member of ASD for unlimited <br /> access to all resources, articles and insights.
          </H2>
          <div>
            <Button>MEMBERSHIP ENQUIRY</Button>
          </div>
        </Member>

        <Photos>
          <img src="footerpic1.JPG" alt="" data-aos="slide-up" data-aos-duration="1200" />
          <img src="footerpic2.JPG" alt="" data-aos="slide-up" data-aos-duration="1800" />
          <img src="footerpic3.JPG" alt="" data-aos="slide-up" data-aos-duration="2200" />
        </Photos>
      </Container>

      <Wrapper>
        <Subscribe>
          <h5>ASSOCIATION OF SPORTING DIRECTORS NEWSLETTER</h5>
          <div>
            <img src="icon.JPG" alt="" style={{ paddingLeft: '11rem', paddingTop: '14px' }} />
          </div>
        </Subscribe>
        <Input>
          <h2>
            Subscribe to our newsletters to <br /> not miss our latest news
          </h2>
          <div>
            <Email type="text" placeholder="Email Address" placeholderTextColor="white" />
          </div>
          <div>
            <Signup>SIGNUP</Signup>
          </div>
        </Input>
      </Wrapper>
    </>
  );
};

export default Section3;
