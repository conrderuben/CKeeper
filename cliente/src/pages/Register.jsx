import React from 'react';
import NavBar from '../components/NavBar';
import Principal from '../components/Main';
import styled from 'styled-components';
import SobreNosotros from '../components/AboutUs';
import Contacto from '../components/Contact';
import { Form } from '../components/RegisterForm';

const Contenedor = styled.div`
  padding: 0;
`;

const Registro = () => {
  return (
    <Contenedor>
      <NavBar />
      <Form />
    </Contenedor>
  );
};

export default Registro;
