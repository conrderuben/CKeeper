import React from 'react';
import Styled from 'styled-components';
import SideMenu from '../components/sideMenu/SideMenu';
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
  justify-content: center;
  flex: 1;
  overflow-y: scroll;
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
