import React from 'react';
import styled from 'styled-components';
import fondo1 from '../assets/img/fondo1.jpg';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ImagenContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  justify-content: center;
`;
const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Eslogan = styled.h2`
  font-family: 'Quicksand', sans-serif;
  position: absolute;
  text-align: center;
  color: white;
  top: 15vh;
`;

export const Principal = props => {
  return (
    <Container>
      <a name="home"></a>
      <ImagenContainer>
        <Eslogan>{props.texto}</Eslogan>
        <Imagen src={fondo1} />
      </ImagenContainer>
    </Container>
  );
};
