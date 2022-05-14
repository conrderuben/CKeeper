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
  flex: 1;
  overflow-y: scroll;
`;

export const SearchPage = () => {
  const [rentPosts, setRentPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const publicPlaces = await httpClient
        .get(`http://localhost:4000/api/get-posts`)
        .then(x => x.data);

      let publicPlacesWithData = Promise.all(
        publicPlaces.map(place => {
          return httpClient
            .get(
              `http://localhost:4000/api/get-place-with-data/${place.ubicationId}/${place.userId}`
            )
            .then(data => {
              const info = data.data;
              const obj = {
                ...place,
                ...info
              };
              return obj;
            });
        })
      ).then(x => {
        setRentPosts(x);
      });
    }

    getData();
  }, []);

  return (
    <Container>
      <SideMenu />
      <Content className=" py-4 dark">
        {rentPosts.map(value => {
          return (
            <Place
              key={value.id}
              desc={value.description}
              height={value.height}
              long={value.long}
              width={value.width}
              photo={value.photo}
              prize={value.prize}
              user={value.user_name}
              date={value.updatedAt}
              city={value.city}
              pc={value.pc}
              street={value.street}
              number={value.number}
            ></Place>
          );
        })}
      </Content>
    </Container>
  );
};
