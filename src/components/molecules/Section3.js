import React from 'react'
import styled from 'styled-components'
import "normalize.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 4000
}
 
);

export default function Section3() {
  const Container =  styled.div`
  font-family:'inter';
  padding-top: 10rem;
  background-color:#f1f5f6;
  margin-left: 4rem;
  padding-bottom:200px;
  color:#323033;
  `
  const News =  styled.section`
  margin-left:5rem;
  display:flex;
  /* justify-content:space-evenly; */
  `

  const Member = styled.section`
  margin-left:5rem;
  display:flex;
  justify-content:space-between;
  margin-right: 6.4rem;
  margin-bottom:30px;
  `

  const H2 = styled.h2`
  font-size:30px;
  font-weight:600;
  `

const Button = styled.button`
margin-top: 1.8rem;
  background-color:#e64b38;
  &:hover {
      background-color: #d12e1a;
    }
  color:#fff;
  width:200px;
  padding-top:20px;
  padding-bottom:20px;
  border-radius:30px;
  border: #ed6050;
  cursor:pointer;
  font-size:14px;
  `

  const Photos = styled.section`
  margin-left:5rem;
  display:flex;
  justify-content:space-between;
  margin-right: 6rem;
  `

  return (
    <Container>
      <News>
        <h5>LATEST NEWS</h5>
        <div><img src="icon3.JPG" alt="" style={{paddingLeft:'13.8rem', paddingTop:'14px'}}/></div>
      </News>
      <Member>
        <H2>Become a member of ASD for unlimited <br/> access to all resources, articles and insights.</H2>
        <div>
        <Button>
        MEMBERSHIP ENQUIRY
      </Button>
      </div>
      </Member>

      <Photos>
        <img src="footerpic1.JPG" alt="" data-aos="fade-up"/>
        <img src="footerpic2.JPG" alt="" data-aos="fade-up"/>
        <img src="footerpic3.JPG" alt="" data-aos="fade-up"/>
      </Photos>
      
    </Container>
  )
}
