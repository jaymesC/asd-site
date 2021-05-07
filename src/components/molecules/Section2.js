import React, {useEffect} from 'react'
import styled from 'styled-components'
import "normalize.css"
import AOS from 'aos'
import 'aos/dist/aos.css';


export default function Section2() {

 

  const SectionA = styled.section`
  /* margin-left:18rem; */
  display:flex;
  font-family:'inter';
  font-size:12px;
  padding-right: 40px;
  `

  const SectionB = styled.section`
  padding-bottom:200px ;
  `
  const H1 =  styled.h1`
  font-weight:580;
  font-family:'inter';
  color:rgb(50, 48, 51);
  font-size:30px;
  /* padding-right: 7rem; */
  `
  const Text =  styled.p`
  padding-top: 6rem;
  font-family:'inter';
  margin-right:2rem;
  font-size:18px;
  line-height:30px;

  `

  const Row = styled.section`
  margin-top:10rem;
  margin-left:15rem;
  display:flex;
  color:rgb(50, 48, 51);
  `

  const Column1 = styled.div`
  /* padding-right:100px; */
  `

let AOS;

useEffect(() => {
 
  const AOS = require("aos");
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
    <Row>
    <Column1>
    <SectionA>
      <h3 >OURGOALS</h3>
     <div><img src="icon2.JPG" alt="" style={{paddingLeft:'14rem', paddingTop:'11px'}}/></div> 
    </SectionA>
    <H1>Enabling the sport leaders <br/> to work in a simpler <br/> smarter way.</H1>
    </Column1>
    <SectionB>
    <Text>We work with sporting directors to help build a <br/> community of practice to build the skills and <br/> capabilities essential for the clubs future. We <br/> support members through an executive <br/> programme of activities to enhance their <br/> professional development. Our focus is to help <br/> sporting directors work in a simpler, smarter way.</Text>
    </SectionB>
    </Row>
    </>
  )
}
