import React, { useEffect } from 'react';
import 'normalize.css';
import 'aos/dist/aos.css';
import Navbar from '../components/molecules/Navbar/';
import FirstSection from '../components/molecules/Section_A';
import SectionB from '../components/molecules/Section_B';
import Attribute from '../components/molecules/Attrribute';
import Attribute2 from '../components/molecules/SecondAttribute';
import Section3 from '../components/molecules/Section_C';
import Footer from '../components/molecules/Footer/';

const Home = () => {
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
      <Navbar />
      <FirstSection />
      <SectionB />
      <Attribute
        FirstText="Integrity"
        SecondText="Here at ASD, we promise to be open, honest, ethical and fair. "
        ThirdText="Our reputation is built on trust and we are committed to stick to our
                  word and continue  look after our members."
        img="pic1.jpeg"
        color="#72c1ad"
      />
      <Attribute2
        FirstText="Passion and drive"
        SecondText="Each member of our team derives enthusiasm towards the sporting industry."
        ThirdText="We are driven to continuously move forward, innovate and improve."
        img="blog-image-aspect-ratio-885-605.png"
        color="#e64b38"
      />

      <Attribute
        FirstText="Future Focused"
        SecondText="We anticipate and analyse the challenges and opportunities on the horizon."
        ThirdText="The sporting industry is ever changing and ASD are devoted to being at the forefront of any
                  alteration that will affect your role as a sporting director."
        img="values-placeholder-aspect-ratio-885-605.png"
        color="#442562"
      />

      <Attribute2
        FirstText="Custodian culture"
        SecondText="We are committed to helping people leave our game in a better place."
        img="pic2.jpeg"
        color="#72c1ad"
      />

      <Attribute
        FirstText="Evidence-led"
        SecondText="We strive to be research and expert informed in our practice."
        ThirdText="Thus allowing confidence in our work as well as providing sporting
                  directors with a field of knowledge at their fingertips."
        img="pexels-lukas-669619-aspect-ratio-885-605.jpg"
        color="#e64b38"
      />
      <Section3 />
      <Footer />
    </>
  );
};

export default Home;
