import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import styled from 'styled-components';

const Contenedor = styled.div`
  padding: 0;
`;

const ContactPage = () => {
  return (
    <Contenedor>
      <NavBar />
      <Contact />
    </Contenedor>
  );
};

export default ContactPage;
