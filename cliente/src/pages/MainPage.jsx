import React from 'react';
import Styled from 'styled-components';
import InputValidated from '../components/InputValidated';
import SideMenu from '../components/sideMenu/SideMenu';
import { useEffect, useState } from 'react';
import { httpClient } from '../utils/httpClient';
import HomeContent from '../components/HomeContent/HomeContent';

const Container = Styled.div`
  display: flex;
  background: #110f16;
  height:100%;
  margin: auto;
`;

const ContentContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
`;

const Content = Styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 40px 0; */
`;

const MainPage = () => {
  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        <HomeContent />
      </ContentContainer>
    </Container>
  );
};

export default MainPage;
