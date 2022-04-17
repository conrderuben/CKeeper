import React from 'react';
import Styled from 'styled-components';
import InputValidated from '../components/InputValidated';
import SideMenu from '../components/sideMenu/SideMenu';
import Cookies from 'universal-cookie';
import Cookie from 'js-cookie';

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
  // const cookies = new Cookies();
  // console.log(cookies.get('jwt'));
  // if (Cookie.get('jwt')) {
  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        {/* <Content>{cookies.get('user').usuario}</Content> */}
        <Content></Content>
      </ContentContainer>
    </Container>
  );
  // } else {
  //   return <h1>No autorizado</h1>;
  // }
};

export default MainPage;
