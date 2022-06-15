import React from 'react';
import styled from 'styled-components';
import { CarForm } from '../components/CarForm/CarForm';
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
        <CarForm />
      </Content>
    </Container>
  );
};

export default AddCars;
