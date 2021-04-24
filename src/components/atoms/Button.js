import React from 'react'
import styled from 'styled-components'

export default function Button({label}) {
  const Button = styled.button`
  background-color:#d12e1a;
  color:#000;
  width:50px;
  padding:20px;
  
  `
  return (
    <div>
      <Button></Button>
    </div>
  )
}
