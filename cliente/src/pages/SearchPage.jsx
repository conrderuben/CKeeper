import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../components/sideMenu/SideMenu';
import { httpClient } from '../utils/httpClient';
import Place from '../components/Place/Place';
import Filters from '../components/Filters';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const [cities, setCities] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [userFilter, setUserFilter] = useState('');
  const [prizeFilter, setPrizeFilter] = useState('0');
  const [help, setHelp] = useState([]);
  const array = [];
  const [user, setUser] = useState();
  useEffect(() => {
    async function getData() {
      await httpClient.get('user').then(x => {
        setUser(x.data);
      });
    }

    getData();
  }, []);
  useEffect(() => {
    async function getData() {
      const publicPlaces = await httpClient.get(` /get-posts`).then(x => x.data);

      let publicPlacesWithData = Promise.all(
        publicPlaces.map(place => {
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
        setRentPosts(x);
      });
    }

    getData();
  }, []);
  useEffect(() => {
    async function getData() {
      const data = await httpClient.get(` /getAllCities`).then(x => setCities(x.data));
    }
    getData();
  }, []);

  const handleCityChange = e => {
    setCityFilter(e.target.value);
  };

  const handleUserChange = e => {
    setUserFilter(e.target.value);
  };

  const handlePrizeChange = e => {
    setPrizeFilter(e.target.value);
  };

  return (
    <Container>
      <SideMenu />
      <Content className=" py-4 dark">
        <Filters
          data={cities}
          onChangeCity={handleCityChange}
          onChangeUser={handleUserChange}
          onChangePrize={handlePrizeChange}
        />

        {rentPosts
          .filter(valCity => {
            if (cityFilter == '') {
              return valCity;
            } else if (valCity.city.toLowerCase().includes(cityFilter.toLocaleLowerCase())) {
              return valCity;
            }
          })
          .filter(valUser => {
            if (userFilter == '') {
              return valUser;
            } else if (valUser.user_name.toLowerCase().includes(userFilter.toLocaleLowerCase())) {
              return valUser;
            }
          })

          .sort((x, y) => {
            if (x.prize > y.prize) {
              if (prizeFilter == '>') {
                return 1;
              } else if (prizeFilter == '<') {
                return -1;
              } else {
                return 0;
              }
            } else if (x.prize < y.prize) {
              if (prizeFilter == '<') {
                return 1;
              } else if (prizeFilter == '>') {
                return -1;
              } else {
                return 0;
              }
            } else {
              return 0;
            }
          })
          .map(value => {
            if (value.userId != user.id) {
              return (
                <Place
                  key={value.id}
                  placeId={value.id}
                  desc={value.description}
                  height={value.height}
                  long={value.long}
                  width={value.width}
                  photo={value.photo}
                  prize={value.prize}
                  idUser={value.userId}
                  user={value.user_name}
                  date={value.updatedAt}
                  city={value.city}
                  pc={value.pc}
                  street={value.street}
                  number={value.number}
                ></Place>
              );
            }
          })}
      </Content>
    </Container>
  );
};
