import React from "react";
import styled from "styled-components"
import fondo2 from "../assets/img/fondo2.jpg"
import fondo1 from "../assets/img/fondo1.jpg"
import fondo3 from "../assets/img/fondo3.jpg"
import fondo4 from "../assets/img/fondo4.jpg"
import fondo5 from "../assets/img/fondo5.jpg"





const Container = styled.div`
    display: flex ;
    padding:0 ;
      width: 100vw;
    height:100vh;
    max-width: 100% ;
    `;

const ImagenContainer = styled.div`
    flex:1 ;
    width: 100%;
    height:100%;
    position: relative ;
    
   
   
    `
const Imagen = styled.img`
 width:100% ;
 height:100% ;
 object-fit: cover ;
     
`

const Eslogan = styled.h2`
 position: absolute ;
 width: 100%;
 text-align: center ;
 color:white;
 top:15vh ;    
`

const Principal = (props) => {
  return (
    <Container>
      <a name="home"></a>
       <ImagenContainer><Eslogan>{props.texto}</Eslogan><Imagen src={fondo1}/></ImagenContainer>
        
    </Container>
  )
}

export default Principal