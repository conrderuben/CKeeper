import React from 'react';
import NavBar from '../components/NavBar';
import { Principal } from '../components/Principal';
import styled from 'styled-components';
import SobreNosotros from '../components/SobreNosotros';
import Contacto from '../components/Contacto';

const Contenedor = styled.div`
  padding: 0;
`;

const Home = () => {
  return (
    <Contenedor>
      <NavBar />
      <Principal texto="Protegelo como si fuese tu hijo..." />
      <SobreNosotros />
    </Contenedor>
  );
};

export default Home;
