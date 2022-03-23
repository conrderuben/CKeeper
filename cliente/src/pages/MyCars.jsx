import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarCard } from '../components/CarCard';
import { CardAdd } from '../components/CardAdd';
import SideMenu from '../components/sideMenu/SideMenu';
import Cookies from 'universal-cookie';

const Container = styled.div`
  display: flex;
  background-color: purple;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const MyCars = () => {
  const [listOfVehicles, setListOfVehicles] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);

  const cookies = new Cookies();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/get-vehicles/${cookies.get('user').id}`).then(resp => {
      setListOfVehicles(resp.data);
    });
    // listOfVehicles.map((value, key) => {
    //   axios.get(`http://localhost:4000/api/get-user-by-id${value.idUsuario}`).then(response => {
    //     setListOfUsers(...listOfUsers, response.data);
    //   });
    // });
  }, []);

  if (cookies.get('user') == undefined) {
    return <h1>No autorizado</h1>;
  } else {
    return (
      <Container>
        <SideMenu />
        <ContentContainer>
          {listOfVehicles.map((value, key) => {
            return <CarCard tipo={value.tipo}></CarCard>;
          })}
          {/* usuario={listOfUsers[0].usuario} */}
          <CardAdd />
        </ContentContainer>
      </Container>
    );
  }
};
