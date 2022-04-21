import React from 'react';
import Styled from 'styled-components';
import InputValidated from '../components/InputValidated';
import SideMenu from '../components/sideMenu/SideMenu';
import { useEffect, useState } from 'react';
import { httpClient } from '../utils/httpClient';

const Container = Styled.div`
  display: flex;
  background-color: purple;
  height:100%;
`;

const ContentContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Content = Styled.div`
  color:white;
  margin-top: 20px ;
`;

const MainPage = () => {
  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        <Content></Content>
      </ContentContainer>
    </Container>
  );
  // } else {
  //   return <h1>No autorizado</h1>;
  // }
};

export default MainPage;
