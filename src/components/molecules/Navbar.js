import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import "normalize.css"
import { FaLock } from 'react-icons/fa';


export default function Navbar() {
  const Navbar = styled.nav`
  display: flex;
  justify-content:center;
  margin: 50px auto;
  `
  const Links = styled.div`
  display: inline-block;
  `
  const Navlinks = styled.a`
  display: inline-block;
  margin-left: 50px;
  margin-top: 20px;
  border-bottom: 3px solid transparent;
  font-size: 18px;
  cursor:pointer;
  font-family:Tahoma;
  color:rgb(128, 122, 122);
  
  `
  const Button = styled.button`
  background-color:#d12e1a;
  color:#fff;
  width:200px;
  padding-top:16px;
  padding-bottom:16px;
  border-radius:30px;
  border: #d12e1a;
  cursor:pointer;
  font-size:14px;
  
  `
  return (
    <div>
      <Navbar>
      <img src="logo.JPG" alt=""/>
      <Links>
        <Navlinks to="/">Benefits</Navlinks>
        <Navlinks to="/about">Goals</Navlinks>
        <Navlinks to="/projects"> Membership</Navlinks>
        <Navlinks to="/projects"> Blog</Navlinks>
        <Navlinks to="/projects"> Team</Navlinks>
        <Navlinks to="/projects"> <Button><FaLock /> MEMBERS LOGIN</Button></Navlinks>
      </Links>
    </Navbar>
    </div>
  )
}
