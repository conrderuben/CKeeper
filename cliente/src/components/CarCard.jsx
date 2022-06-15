import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../utils/httpClient';

const Card = styled.div`
  background-color: white;
  width: 270px;
  height: 500px;
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
const Date = styled.span`
  margin-top: 0px;
  padding-bottom: 0px;
  line-height: 70%;
`;

const Button = styled.button`
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  display: block;
  text-align: center;
  margin-left: 20px;
  text-decoration: none;
  box-shadow: 2px 2px 5px #545353;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100px;
  &:hover {
    color: white;
    background-color: #0d47a1;
  }
`;
const DeleteButton = styled.button`
  background-color: #e22e2e;
  color: white;
  padding: 10px 20px;
  display: block;
  text-align: center;
  margin-left: 20px;
  text-decoration: none;
  box-shadow: 2px 2px 5px #ac4343;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100px;
  &:hover {
    color: white;
    background-color: #ac3d3d;
  }
`;

export const CarCard = props => {
  const navigate = useNavigate();
  const editCars = () => {
    navigate(`/editCar?${props.id}`);
  };

  const deleteVehicle = () => {
    let confirmAction = window.confirm('Are you sure to delete this vehicle?');
    if (confirmAction) {
      httpClient
        .post(`http://localhost:4000/api/delete-vehicle/${props.id}`)
        .then(window.location.reload());
    }
  };
  const photos = () => {
    var array = [];
    array.push(
      <img
        src={require(`../assets/users/${props.idUser}/Vehicles/Vehicle${props.id}/vehicle.png`)}
        alt="Image Title"
        style={{ height: '100%', width: '100%' }}
        
      />
    );

    return array;
  };
  var fec = props.date.split('-');
  return (
    <Card>
      <CardImg>{photos()}</CardImg>
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
      <Group>
        <Button onClick={editCars}>Edit</Button>
        <DeleteButton onClick={deleteVehicle}>Delete</DeleteButton>
      </Group>
    </Card>
  );
};
