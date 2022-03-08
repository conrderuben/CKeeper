import React from "react";
import styled from "styled-components"
import fondo2 from "../assets/img/fondo2.jpg"


const Container = styled.div`
    
    padding:0 ;
      width: 100vw;
    height:auto  ;
    overflow-x: hidden ;
    `;

const ImagenContainer = styled.div`
    flex:1 ;
    width: 100%;
    height:100%;
   
   
    `
const Imagen = styled.img`
 width:100% ;
 height:auto  ;
     
`

const Principal = () => {
  return (
    <Container>
       <ImagenContainer><Imagen src={fondo2}/></ImagenContainer> 
    </Container>
  )
}

export default Principal