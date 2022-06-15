import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CarCard } from '../components/CarCard';
import { CardAdd } from '../components/CardAdd';
import SideMenu from '../components/sideMenu/SideMenu';
import { httpClient } from '../utils/httpClient';

const Container = styled.div`
  display: flex;
  background: #110f16;
  height: 100%;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
`;

export const MyCars = () => {
  const [vehiclesWithBrand, setVehiclesWithBrand] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      const vehicles = await httpClient.get(`/get-vehicles`).then(x => x.data);

      let vehiclesWB = Promise.all(
        vehicles.map(vehicle => {
          return httpClient.get(`/get-brand-by-id/${vehicle.typeId}`).then(data => {
            const obj = {
              id: vehicle.id,
              type: vehicle.type,
              matriculationDate: vehicle.matriculationDate,
              brand: data.data.brand,
              model: data.data.model,
              userId: vehicle.userId
            };
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
              id={value.id}
              type={value.type}
              date={value.matriculationDate}
              brand={value.brand}
              idUser={value.userId}
              model={value.model}
            ></CarCard>
          );
        })}

        <CardAdd />
      </ContentContainer>
    </Container>
  );
};
