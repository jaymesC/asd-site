import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default function Navbar() {
  const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto;
  `
  const Links = styled.div`
  display: inline-block;
  text-align: right;
  `
  const Navlinks = styled.a`
  display: inline-block;
  margin-left: 50px;
  font-weight: 400;
  padding-bottom: 0px;
  border-bottom: 3px solid transparent;
  `
  return (
    <div>
      <Navbar>
      <h1>Gatsby Project</h1>
      <Links>
        <Navlinks to="/">Home</Navlinks>
        <Navlinks to="/about">About</Navlinks>
        <Navlinks to="/projects"> Projects</Navlinks>
      </Links>
    </Navbar>
    </div>
  )
}
