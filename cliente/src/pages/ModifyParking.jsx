import React from 'react';
import SideMenu from '../components/sideMenu/SideMenu';
import styled from 'styled-components';
import { Edit } from '../components/EditParking/EditParking';

const Contenedor = styled.div`
  padding: 0;
  height: 100%;
  min-height: 800px;
  display: flex;
`;
const ContentContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

export const ModifyParking = () => {
  return (
    <Contenedor>
      <SideMenu />
      <ContentContainer>
        <Edit />
      </ContentContainer>
    </Contenedor>
  );
};
