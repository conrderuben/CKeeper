import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
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
