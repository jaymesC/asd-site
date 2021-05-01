import React from "react"
import "normalize.css"
import Navbar from "../components/molecules/Navbar"
import Section1 from "../components/molecules/Section1"
import Section2 from "../components/molecules/Section2"
import Attribute from "../components/molecules/Attribute"
import Attribute2 from "../components/molecules/Attribute2"
import Section3 from "../components/molecules/Section3"

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Attribute
        writeup1="Integrity" 
        writeup2='Here at ASD, we promise to be open, honest,
        ethical and fair. '
        writeup3='Our reputation is built on trust and we are committed to stick to our word and continue  look after our members.'
         
    img="pic1.jpeg"
    color='#72c1ad'
      />
      <Attribute2 
      writeup1="Passion and drive" 
      writeup2='Each member of our team derives enthusiasm towards the sporting industry.'
      writeup3='We are driven to continuously move forward, innovate and improve.'
      img="blog-image-aspect-ratio-885-605.png"
      color="#e64b38" />

<Attribute
        writeup1="Future Focused" 
        writeup2='We anticipate and analyse the challenges and opportunities on the horizon.'
        writeup3='The sporting industry is ever changing and ASD are devoted to being at the forefront of any alteration that will affect your role as a sporting director.'
         
    img="values-placeholder-aspect-ratio-885-605.png"
    color='#442562'
      />

<Attribute2 
      writeup1="Custodian culture" 
      writeup2='We are committed to helping people leave our game in a better place.'
      img="pic2.jpeg"
      color="#72c1ad" />

<Attribute
        writeup1="Evidence-led" 
        writeup2='We strive to be research and expert informed in our practice.'
        writeup3='Thus allowing confidence in our work as well as providing sporting directors with a field of knowledge at their fingertips.

        '
         
    img="pexels-lukas-669619-aspect-ratio-885-605.jpg"
    color='#e64b38'
      />
    <Section3 /> 
    </>
  )
}
