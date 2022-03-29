import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarCard } from '../components/CarCard';
import { CardAdd } from '../components/CardAdd';
import SideMenu from '../components/sideMenu/SideMenu';
import Cookies from 'universal-cookie';

function createVehicle({ id, tipo, fechaMatriculacion, idUsuario, idMarca, createdAt, updatedAt }) {
  return {
    id,
    tipo,
    fechaMatriculacion,
    idUsuario,
    idMarca,
    createdAt: new Date(createdAt),
    updatedAt
  };
}

const Container = styled.div`
  display: flex;
  background-color: #b5e5f8;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const MyCars = () => {
  const [listOfVehicles, setListOfVehicles] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [vehiclesWithBrand, setVehiclesWithBrand] = useState([]);

  const cookies = new Cookies();
  useEffect(() => {
    async function getData() {
      const vehicles = await axios
        .get(`http://localhost:4000/api/get-vehicles/${cookies.get('user').id}`)
        .then(x => x.data);

      let vehiclesWB = Promise.all(
        vehicles.map(vehicle => {
          return axios
            .get(`http://localhost:4000/api/get-brand-by-id/${vehicle.idMarca}`)
            .then(brand => {
              const obj = {
                id: vehicle.id,
                tipo: vehicle.tipo,
                fechaMatriculacion: vehicle.fechaMatriculacion,
                marca: brand.data
              };
              console.log(obj);
              return obj;
            });
        })
      ).then(console.log(vehiclesWB));
    }

    getData();
  }, []);

  if (cookies.get('user') == undefined) {
    return <h1>No autorizado</h1>;
  } else {
    return (
      <Container>
        <SideMenu />
        <ContentContainer>
          {vehiclesWithBrand.map(value => {
            return (
              <CarCard
                type={value.tipo}
                date={value.fechaMatriculacion}
                brand={value.marca}
              ></CarCard>
            );
          })}
          {/* usuario={listOfUsers[0].usuario} */}

          <CardAdd />
        </ContentContainer>
      </Container>
    );
  }
};
