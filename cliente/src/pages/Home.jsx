import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Principal } from '../components/Main';
import styled from 'styled-components';
import SobreNosotros from '../components/AboutUs';
import Contacto from '../components/Contact';

const Contenedor = styled.div`
  padding: 0;
`;

const Home = () => {
  // const cookies = Cookies();
  // useEffect(() => {
  //   cookies.remove('user', { path: '/' });
  // }, []);
  return (
    <Contenedor>
      <NavBar />
      <Principal texto="Protegelo como si fuese tu hijo..." />
      <SobreNosotros />
    </Contenedor>
  );
};

export default Home;
