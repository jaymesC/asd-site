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
  margin-top: 20px;
  border-bottom: 3px solid transparent;
  font-size: 22px;
  cursor:pointer;
  font-family:Tahoma;
  color:rgb(128, 122, 122);
  
  `
  return (
    <div>
      <Navbar>
      <img src="logo.JPG" alt=""/>
      <Links> 
      <Navlinks></Navlinks>
      
        <Navlinks to="/">Benefits</Navlinks>
        <Navlinks to="/about">Goals</Navlinks>
        <Navlinks to="/projects"> Membership</Navlinks>
        <Navlinks to="/projects"> Blog</Navlinks>
        <Navlinks to="/projects"> Team</Navlinks>
      </Links>
    </Navbar>
    </div>
  )
}
