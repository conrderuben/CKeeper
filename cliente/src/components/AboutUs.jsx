import React from 'react';
import styled from 'styled-components';
import fondo2 from '../assets/img/fondo2.jpg';
import fondo1 from '../assets/img/fondo1.jpg';
import fondo3 from '../assets/img/fondo3.jpg';
import fondo4 from '../assets/img/fondo4.jpg';
import fondo5 from '../assets/img/fondo5.jpg';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ffffff;
`;

const ImagenContainer = styled.div`
  flex: 3;
  position: relative;
`;
const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescripcionContainer = styled.div`
  flex: 2;
  background-color: #ebf4f7;
`;

const Titulo = styled.h1`
  font-size: 60px;
  margin: 5rem 1rem 1rem 2rem;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
`;

const Descripcion = styled.div`
  margin: 1rem 2rem;
  font-weight: 500;
  padding: 10px;
  font-family: 'Quicksand', sans-serif;
`;
const SobreNosotros = () => {
  return (
    <Container>
      <ImagenContainer>
        <a name="sobre-nosotros"></a>
        <Imagen src={fondo4} />
      </ImagenContainer>
      <DescripcionContainer>
        <Titulo>Sobre Nosotros</Titulo>
        <Descripcion>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur velit ea illum laborum!
          Nesciunt, amet at dolorum enim atque quod vitae accusantium, deleniti facere quidem
          asperiores est perferendis. Ipsum, voluptatum.
        </Descripcion>
      </DescripcionContainer>
    </Container>
  );
};

export default SobreNosotros;
