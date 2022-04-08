import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { CarForm } from '../components/CarForm';

const Contenedor = styled.div`
  padding: 0;
`;

const AddCars = () => {
  return (
    <Contenedor>
      <NavBar />
      <CarForm />
    </Contenedor>
  );
};

export default AddCars;
