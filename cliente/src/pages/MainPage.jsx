import React from 'react';
import Styled from 'styled-components';
import Input from '../components/Input';
import SideMenu from '../components/sideMenu/SideMenu';
import Cookies from 'universal-cookie';

const Container = Styled.div`
  width: 100%;
  display: flex;
  background-color: purple;
  height: 100%;
`;

const ContentContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 0 auto;
  height: auto;
`;

const Content = Styled.div`
  color:white;
  margin-top: 20px ;
`;

const MainPage = () => {
  const cookies = new Cookies();
  if (cookies.get('user') == undefined) {
    return <h1>No autorizado</h1>;
  } else {
    return (
      <Container>
        <SideMenu />
        <ContentContainer>
          <Content>{cookies.get('user').usuario}</Content>
        </ContentContainer>
      </Container>
    );
  }
};

export default MainPage;
