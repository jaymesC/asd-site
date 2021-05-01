import React from "react"
import "normalize.css"
import Navbar from '../components/molecules/Navbar';
import Section1 from '../components/molecules/Section1'
import Section2 from '../components/molecules/Section2'
import Attribute from '../components/molecules/Attribute'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Section1 />
    <Section2 />
    <Attribute/>
    </>
  ) 
  
}
