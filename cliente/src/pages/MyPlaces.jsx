import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import SideMenu from '../components/sideMenu/SideMenu';
import { httpClient } from '../utils/httpClient';
import Place from '../components/Place/Place';
import { PlaceAdd } from '../components/PlaceAdd';

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

const MyPlaces = () => {
  const [myPlaces, setMyPlaces] = useState([]);

  useEffect(() => {
    async function getData() {
      await httpClient
        .get(`http://localhost:4000/api/get-my-places`)
        .then(x => setMyPlaces(x.data));
    }

    getData();
  }, []);
  return (
    <Container>
      <SideMenu />
      <Content className=" py-4 dark">
        {myPlaces.map(value => {
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
        <PlaceAdd />
      </Content>
    </Container>
  );
};

export default MyPlaces;
