import React from 'react';
import NavBar from '../components/NavBar';
import Principal from '../components/Main';
import styled from 'styled-components';
import SobreNosotros from '../components/AboutUs';
import Contacto from '../components/Contact';
import Form from '../components/RegisterForm';
import { LoginForm } from '../components/LoginForm';
import LoginF from '../components/LoginForm/LoginF';

const Contenedor = styled.div`
  padding: 0;
  height: 100%;
`;

const Login = () => {
  return (
    <Contenedor>
      <NavBar />
      <LoginF />
    </Contenedor>
  );
};

export default Login;
