import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarCard } from '../components/CarCard';
import { CardAdd } from '../components/CardAdd';
import SideMenu from '../components/sideMenu/SideMenu';
import Cookies from 'universal-cookie';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 0 auto;
  height: auto;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 85%;
  margin-right: 15px;
  margin-top: 40px;
  height: 100%;
`;
const Card = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 15px;
  border: 2px solid black;
  height: 300px;
  width: 300px;
  box-shadow: 4px 4px 5px 0px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: purple;
  height: 100%;
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
          <CardContainer>
            {listOfVehicles.map((value, key) => {
              return <CarCard tipo={value.tipo}></CarCard>;
            })}
            {/* usuario={listOfUsers[0].usuario} */}
            <CardAdd />
          </CardContainer>
        </ContentContainer>
      </Container>
    );
  }
};
