import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Contacto from '../components/Contact';
import styled from 'styled-components';
import Footer from '../components/Footer';



const Contenedor = styled.div`
  padding: 0;
`;

const ContactPage = () => {

  return (
    <Contenedor>
      <NavBar />
      <Contacto />
      
    </Contenedor>
  );
};

export default ContactPage;