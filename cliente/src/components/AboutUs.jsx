import React from 'react';
import styled from 'styled-components';
import fondo4 from '../assets/img/fondo4.jpg';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ffffff;
  @media only screen and (max-width: 850px) {
    .imgContainer {
      display: none;
    }
  }
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
      <ImagenContainer className="imgContainer">
        <a name="sobre-nosotros"></a>
        <Imagen src={fondo4} />
      </ImagenContainer>
      <DescripcionContainer>
        <Titulo>About us</Titulo>
        <Descripcion>
          We are a company which helps people with their parking places' problems. On one hand, if
          you want a safe and economic place to park your vehicles, we can help you to find one. On
          the other hand, if you are a person who has a parking place but does not use it and want
          to rent it, we can help you to rent your place. In our application you can find
          publications of other people's parking places for rent. Once you find the perfect parking
          place for you, we provide you a safe and easy rent. Also, you can publicate your parking
          place for rent at the price you want and check who has rented your place in the invoice.
          In this way we provide you a safe rental operation.
        </Descripcion>
      </DescripcionContainer>
    </Container>
  );
};

export default SobreNosotros;
