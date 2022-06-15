import React from 'react';
import SideMenu from '../components/sideMenu/SideMenu';
import styled from 'styled-components';
import { Form } from '../components/ParkingForm/ParkingForm';

const Contenedor = styled.div`
  padding: 0;
  height: 100%;
  min-height: 800px;
  display: flex;
`;

export const Parking = () => {
  return (
    <Contenedor>
      <SideMenu />
      <Form />
    </Contenedor>
  );
};
