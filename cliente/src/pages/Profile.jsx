import React from 'react';
import styled from 'styled-components';
import { ProfileEdit } from '../components/Profile/Profile';
import SideMenu from '../components/sideMenu/SideMenu';


const Container = styled.div`
  display: flex;
  background-color: #b5e5f8;
  height: 100%;
`;

const Content = styled.div`
  margin-right: 0;
  flex: 1;
  overflow-y: scroll;
`;

const Profile = () => {
  return (
    <Container>
      <SideMenu />
      <Content>
      <ProfileEdit />
      </Content>
    </Container>
  );
};

export default Profile;
