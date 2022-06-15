import React from 'react';
import styled from 'styled-components';
import { EditCar } from '../components/EditCar/EditCar';
import SideMenu from '../components/sideMenu/SideMenu';

const Container = styled.div`
  display: flex;
  background-color: #b5e5f8;
  height: 100%;
  min-height: 800px;
`;

const Content = styled.div`
  margin-right: 0;
  flex: 1;
  overflow-y: scroll;
`;

const AddCars = () => {
  return (
    <Container>
      <SideMenu />
      <Content>
        <EditCar />
      </Content>
    </Container>
  );
};

export default AddCars;
