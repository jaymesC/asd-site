import React from 'react'
import styled from 'styled-components'
import "normalize.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init({
  duration: 900
}
 
);


export default function Section1() {
  const Section = styled.section`
  padding-left:10rem;
  margin-top: 6rem;
  `
  const Section2 = styled.section`
  display:flex;
  justify-content:space-between;
  `
  const H1 = styled.h1`
  font-size:70px;
  padding-left: 20px;
  `
  const H2 = styled.h2`
  padding-right:10rem;
  margin-top: 6rem;
  text-decoration:underline;
  font-size:18px;
  letter-spacing:2px;
  cursor: pointer;

  `
  const H5 = styled.h5`
  margin-top:30px;
  font-size:16px;
  `
  const Image1 = styled.img`
  width:100%;
  `

  const Wrapper = styled.section`
  background-color:#442562;
  padding-right: -20px;
  padding-bottom:15rem;
  
  `

  const CSection = styled.section`
  display:flex;
  background-color: #f1f5f6;
  margin-right:30px;
  
  /* padding-bottom:10rem; */
  `

  const WriteUp = styled.section`
  padding-top: 8rem;
  margin-left:5rem;
  margin-right: 3.6rem;
  `
  const PicSection = styled.section`
  margin-top: -80px;
  padding-bottom: 50px;
  /* padding-left:40px; */
  
  `

  const BSection = styled.section`
  display:flex;
  justify-content:center;
  background-color:#f1f5f6;
  padding-top:3rem;
  padding-bottom:4rem;
  margin-right:30px;
  border-bottom-right-radius:15px;
  

  `

  const Img1 = styled.img`
  margin-bottom:90px;
  margin-right:60px ;
  `

const Button = styled.button`
background-color:#e64b38;
color:#fff;
width:350px;
padding-top:24px;
padding-bottom:24px;
border-radius:30px;
border: #ed6050;
cursor:pointer;
font-size:16px;
font-weight:600;
`

const Brand = styled.section`
margin-left: 7rem;
color:#fff;
padding-top: 12rem;
display: flex;
/* justify-content:space-between; */
`

const BrandLogo =  styled.section`
margin-left:15rem;
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
        
      </BrandLogo>
      </Wrapper>
    </div>
  )
}
