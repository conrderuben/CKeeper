import React from 'react'
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
    background-color: #ffffff ;
    `;

const ImagenContainer = styled.div`

width: 60%;
height:100%;
position: relative ;


`
const Imagen = styled.img`
width:100% ;
height:100%  ;
object-fit: cover ;
 
`

const DescripcionContainer = styled.div`
flex:1 ;
background-color: #ebf4f7;
position: relative ;

`;

const Titulo = styled.h1`
font-size: 60px;
position:absolute ;
left: 20% ;
margin-top:60px ;
font-family: 'Bebas Neue', cursive;
letter-spacing: 2px ;
`;

const Descripcion = styled.div`
    position: absolute ;
    left: 20%;
    top: 140px ;
`;
const SobreNosotros = () => {
  return (
    <Container>
        <ImagenContainer>
            <a name="sobre-nosotros"></a>
            <Imagen src={fondo4}/>
        </ImagenContainer>
        <DescripcionContainer>
            <Titulo>Sobre Nosotros</Titulo>
            <Descripcion>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
                 velit ea illum laborum! Nesciunt, amet at dolorum enim atque quod vitae accusantium, 
                 deleniti facere quidem asperiores est perferendis. Ipsum, voluptatum.
            </Descripcion>
        </DescripcionContainer>
    </Container>
  )
}

export default SobreNosotros