import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { CarForm } from '../components/CarForm';
import SideMenu from '../components/sideMenu/SideMenu';

const Contenedor = styled.div`
  padding: 0;
  height: 100%;
  display: flex;
`;

const AddCars = () => {
  return (
    <Contenedor>
      <SideMenu />
      <CarForm />
    </Contenedor>
  );
};

export default AddCars;
