import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { Form } from '../components/RegisterForm';

const Contenedor = styled.div`
  padding: 0;
  height: 100%;
`;

const Register = () => {
  return (
    <Contenedor>
      <NavBar />
      <Form />
    </Contenedor>
  );
};

export default Register;
