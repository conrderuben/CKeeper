import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarCard } from '../components/CarCard';
import { CardAdd } from '../components/CardAdd';
import SideMenu from '../components/sideMenu/SideMenu';

import { httpClient } from '../utils/httpClient';

const Container = styled.div`
  display: flex;
  background-color: #b5e5f8;
  height: 100%;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: scroll;
`;

export const MyCars = () => {
  const [vehiclesWithBrand, setVehiclesWithBrand] = useState([]);

  useEffect(() => {
    async function getData() {
      const vehicles = await httpClient
        .get(`http://localhost:4000/api/get-vehicles/13`)
        .then(x => x.data);

      let vehiclesWB = Promise.all(
        vehicles.map(vehicle => {
          return httpClient
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
      ).then(x => {
        setVehiclesWithBrand(x);
      });
    }

    getData();
  }, []);

  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        {vehiclesWithBrand.map(value => {
          return (
            <CarCard
              key={value.id}
              type={value.tipo}
              date={value.fechaMatriculacion}
              brand={value.marca}
            ></CarCard>
          );
        })}

        <CardAdd />
      </ContentContainer>
    </Container>
  );
};
