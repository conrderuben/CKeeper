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
      const places = await httpClient.get(` /get-my-places`).then(x => x.data);

      let placesWithData = Promise.all(
        places.map(place => {
          return httpClient
            .get(` /get-place-with-data/${place.ubicationId}/${place.userId}`)
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
        setMyPlaces(x);
      });
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
              desc={value.description}
              height={value.height}
              long={value.long}
              width={value.width}
              photo={value.photo}
              prize={value.prize}
              user={value.user_name}
              date={value.updatedAt}
              published={value.published}
              city={value.city}
              pc={value.pc}
              street={value.street}
              idUser={value.userId}
              number={value.number}
              rented={value.rented}
              placeId={value.id}
            ></Place>
          );
        })}
        <PlaceAdd />
      </Content>
    </Container>
  );
};

export default MyPlaces;
