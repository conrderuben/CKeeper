import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarCard } from '../components/CarCard';
import { CardAdd } from '../components/CardAdd';
import SideMenu from '../components/sideMenu/SideMenu';
import { PublicPlace } from '../components/PublicPlace';
import { httpClient } from '../utils/httpClient';
import Place from '../components/Place/Place';
import style from '../components/Place/style.scss';
const Container = styled.div`
  display: flex;
  background-color: #b5e5f8;
  height: 100%;
`;

const Content = styled.div`
  margin-right: 0;
  width: 100%;
  overflow-y: scroll;
`;

const Column = styled.div`
  display: flex;
  flex: 4;
  margin: 0 auto;
  flex-direction: column;
`;

export const SearchPage = () => {
  const [rentPosts, setRentPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      await httpClient.get(`http://localhost:4000/api/get-posts`).then(x => setRentPosts(x.data));
    }

    getData();
  }, []);

  return (
    <Container>
      <SideMenu />
      <Content className=" py-4 dark">
        <Column>
          {rentPosts.map(value => {
            return (
              <Place
                key={value.id}
                desc={value.descripcion}
                alto={value.alto}
                largo={value.largo}
                precio={value.true}
                user={value.idUsuario}
              ></Place>
            );
          })}
        </Column>
      </Content>
    </Container>
  );
};
