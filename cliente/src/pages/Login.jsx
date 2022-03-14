import React from 'react';
import NavBar from '../components/NavBar';
import Principal from '../components/Main';
import styled from 'styled-components';
import SobreNosotros from '../components/AboutUs';
import Contacto from '../components/Contact';
import Form from '../components/RegisterForm';
import InicioSesion from '../components/LoginForm';

const Contenedor = styled.div`
  padding: 0;
`;

const Login = () => {
  return (
    <Contenedor>
      <NavBar />
      <InicioSesion />
    </Contenedor>
  );
};

export default Login;
