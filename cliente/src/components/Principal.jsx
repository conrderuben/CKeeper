import React from "react";
import styled from "styled-components"



const Container = styled.div`
      height: 100vh;
      width: 100%;
      
    `;
const Imagen = styled.img`

`

const Principal = () => {
  return (
    <Container>
        <Imagen src="../../fondo2.jpg"/>
    </Container>
  )
}

export default Principal