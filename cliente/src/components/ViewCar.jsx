import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../utils/httpClient';

const Card = styled.div`
  background-color: white;
  width: 270px;
  height: 400px;
  margin: 10px;
  border-radius: 15px;
  font-family: 'Quicksand', sans-serif;
  box-shadow: 1px 1px 6px #545353;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.7s ease;
  }
`;

const CardImg = styled.div`
  background-color: aqua;
  background-image: url('https://c4.wallpaperflare.com/wallpaper/179/817/188/lamborghini-coche-azul-deportivo-wallpaper-preview.jpg');
  height: 200px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 15px 15px 0 0;
`;

const Group = styled.div`
  display: flex;
`;
const DateGroup = styled.div``;

const Title = styled.p`
  padding-left: 10px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  padding: 1px 10px;
  margin-bottom: 3px;
`;
const Date = styled.p`
  margin-top: 0px;
  padding-bottom: 0px;
  line-height: 70%;
`;

export const ViewCar = props => {
  const navigate = useNavigate();

  const editCars = () => {
    navigate(`/editCar?${props.id}`);
  };
  var fec = props.date.split('-');
  return (
    <Card>
      <CardImg />
      <Group>
        <Title>Type:</Title>
        <Text>{props.type}</Text>
      </Group>
      <DateGroup>
        <Title>Registration date:</Title>
        <Text>
          <Date>{fec[2].substring(0, 2) + '/' + fec[1] + '/' + fec[0]}</Date>
        </Text>
      </DateGroup>
      <Group>
        <Title>Brand:</Title>
        <Text>{props.brand}</Text>
      </Group>
      <Group>
        <Title>Model:</Title>
        <Text>{props.model}</Text>
      </Group>
    </Card>
  );
};
