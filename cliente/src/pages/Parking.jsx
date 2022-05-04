import React from 'react';
import NavBar from '../components/NavBar';
import Principal from '../components/Main';
import styled from 'styled-components';
import SobreNosotros from '../components/AboutUs';
import Contacto from '../components/Contact';
import {Form } from '../components/ParkingForm';

const Contenedor = styled.div`
  padding: 0;
`;

export const Parking = () => {
  return (
    <Contenedor>
      <NavBar />
      <Form />
    </Contenedor>
  );
};

