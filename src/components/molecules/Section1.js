import React from 'react'
import styled from 'styled-components'
import "normalize.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

// ..
AOS.init({
  duration: 700
}
 
);


export default function Section1() {
  const Section = styled.section`
  padding-left:9rem;
  margin-top: 6rem;
  `
  const Section2 = styled.section`
  display:flex;
  justify-content:space-between;
  `
  const H1 = styled.h1`
  font-size:60px;
  font-weight:600;
  padding-left: 20px;
  font-family:'inter';
  color:rgb(50, 48, 51);
  `
  const H2 = styled.h2`
  padding-right:10rem;
  margin-top: 6rem;
  text-decoration:underline;
  font-size:18px;
  letter-spacing:2px;
  cursor: pointer;
  font-family:'inter';
  color:rgb(50, 48, 51);
  `
  const H5 = styled.h5`
  margin-top:30px;
  font-size:16px;
  font-family:'inter';
  color:rgb(50, 48, 51);
  `
  const Image1 = styled.img`
  width:100%;
  `

  const Wrapper = styled.section`
  background-color:#442562;
  /* padding-right: -20px; */
  padding-bottom:15rem;
  border-radius: 75% 55% / 25% 6%;
  margin-bottom: 5rem;
  border-bottom:18px solid #73c1ad;
  `

  const CSection = styled.section`
  display:flex;
  background-color: #f1f5f6;
  margin-right:5px;
  font-family:'inter';
  color:rgb(50, 48, 51);
  `

  const WriteUp = styled.section`
  padding-top: 8rem;
  margin-left:5rem;
  margin-right: 2.9rem;
  font-family:'inter';
  border-bottom-right-radius:10px;
  color:rgb(50, 48, 51);
  `
  const PicSection = styled.section`
  margin-top: -80px;
  /* padding-bottom: 50px; */
  /* padding-left:40px; */
  
  `

  const BSection = styled.section`
  display:flex;
  justify-content:center;
  background-color:#f1f5f6;
  padding-top:3rem;
  padding-bottom:4rem;
  margin-right:50px;
  border-bottom-right-radius:15px;
  

  `

  const Img1 = styled.img`
  margin-bottom:90px;
  margin-right:60px ;
  `

const Button = styled.button`
background-color:#e64b38;
transition:0.5s;
&:hover {
      background-color: #d12e1a;
    }
color:#fff;
width:350px;
padding-top:22px;
padding-bottom:22px;
border-radius:30px;
border: #ed6050;
cursor:pointer;
font-family:'inter';
font-size:16px;
font-weight:500;
`

const Brand = styled.section`
margin-left: 7rem;
color:#fff;
padding-top: 12rem;
display: flex;
padding-bottom: 10px;
font-family:'inter';
/* justify-content:space-between; */
`

const BrandLogo =  styled.section`
margin-left:30rem;

justify-content: flex-end;
`

  return (
    <div>
      <Section>
      <H5>SUPPORTING, CONNECTING & <br/>
DEVELOPING SPORTING DIRECTORS</H5>
      <Section2>
        <H1>Association of <br/> Sporting Directors</H1>
        <H2>↔  MEET THE TEAM</H2>
      </Section2>
</Section>
<Image1 src="New-hero-aspect-ratio-1920-875.png" alt=""/>
      <Wrapper>
        {/* <PicDiv></PicDiv> */}
        <CSection>
      <WriteUp>
        <h5>WHAT WE DO 💠💠💠💠</h5> <br/>
        <h1>Our membership network <br/> provides pioneering <br/> Sporting Directors with the <br/> opportunity to connect <br/> with other leaders in the <br/> global football industry.</h1> 
      </WriteUp>
      <PicSection >
        <Img1 src="card1.JPG" alt="" data-aos="fade-up "/> 
        <img src="card44.JPG" alt="" data-aos="fade-up"/>
      </PicSection>
      </CSection>
      
      <BSection>
      <Button>
        MORE ABOUT OUR BENEFITS
      </Button>
      </BSection>
      <Brand>
      <h4>OUR PARTNERS</h4>
      <div><img src="icon.JPG" alt="" style={{paddingLeft:'80px', paddingTop:'18px'}}/></div>
      <h1 style={{paddingLeft:'80px', paddingTop:'-10px'}}>Trusted by global brands <br/> within the sport sector.</h1>
      </Brand>
      <BrandLogo>
        <img src="hudl.png" alt="" style={{paddingRight:'40px'}} data-aos="fade"/>
        <img src="shoosmith.png" alt="" style={{paddingRight:'40px'}} data-aos="fade"/>
        <img src="sri.png" alt="" style={{paddingRight:'40px'}} data-aos="fade"/>
        <img src="dawbell.png" alt="" data-aos="fade" />
      </BrandLogo>
      </Wrapper>
    </div>
  )
}
