import React from 'react';
import SideMenu from '../components/sideMenu/SideMenu';
import styled from 'styled-components';
import {Edit} from '../components/EditParking/EditParking';

const Contenedor = styled.div`
  padding: 0;
  height: 100%;
  display: flex;
`;

export const ModifyParking = () => {
  return (
    <Contenedor>
      <SideMenu />
      <Edit />
    </Contenedor>
  );
};

