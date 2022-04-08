import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarCard } from '../components/CarCard';
import { CardAdd } from '../components/CardAdd';
import SideMenu from '../components/sideMenu/SideMenu';
import Cookies from 'universal-cookie';
import { PublicPlace } from '../components/PublicPlace';

const Content = styled.div`
  margin-right: 0;
`;

const Column = styled.div`
  display: flex;
  flex: 4;
  margin: 0 auto;
  flex-direction: column;
`;

export const SearchPage = () => {
  const cookies = new Cookies();

  if (cookies.get('user') == undefined) {
    return <h1>No autorizado</h1>;
  } else {
    return (
      <>
        <SideMenu />
        <Content>
          <Column>
            <PublicPlace />
            <PublicPlace />
          </Column>
        </Content>
      </>
    );
  }
};
