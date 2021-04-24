import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import "normalize.css"

export default function Navbar() {
  const Navbar = styled.nav`
  display: flex;
  justify-content:center;
  margin: 40px auto;
  `
  const Links = styled.div`
  display: inline-block;

  `
  const Navlinks = styled.a`
  display: inline-block;
  margin-left: 50px;
  // font-weight: 200;
  margin-top: 20px;
  border-bottom: 3px solid transparent;
  font-size: 22px;
  cursor:pointer;
  
  `
  return (
    <div>
      <Navbar>
      <img src="logo.JPG" alt=""/>
      <Links>
      
      <Navlinks></Navlinks>
      
        <Navlinks to="/">Home</Navlinks>
        <Navlinks to="/about">About</Navlinks>
        <Navlinks to="/projects"> Projects</Navlinks>
        <Navlinks to="/projects"> Projects</Navlinks>
        <Navlinks to="/projects"> Projects</Navlinks>
      </Links>
    </Navbar>
    </div>
  )
}
