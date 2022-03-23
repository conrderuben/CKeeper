import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 15px;
  border: 2px solid black;
  box-shadow: 4px 4px 5px 0px;
  background-color: white;
  height: 300px;
  width: 300px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const CarCard = props => {
  return (
    <Container>
      <h4>Tipo:{props.tipo}</h4>
      <h4>Fecha Matriculacion:{props.fecha}</h4>
      <h4>Marca:{props.marca}</h4>
      <h4>Modelo:{props.modelo}</h4>
      <h4>{props.usuario}</h4>
    </Container>
  );
};
