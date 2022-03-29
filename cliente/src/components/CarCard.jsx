import React from 'react';
import styled from 'styled-components';
import fondo2 from '../assets/img/fondo2.jpg';
import fondo1 from '../assets/img/fondo1.jpg';
import fondo3 from '../assets/img/fondo3.jpg';
import fondo4 from '../assets/img/fondo4.jpg';
import fondo5 from '../assets/img/fondo5.jpg';

const Card = styled.div`
  background-color: white;
  width: 270px;
  height: 450px;
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

const Button = styled.a`
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  display: block;
  text-align: center;
  margin: 0px 50px;
  text-decoration: none;
  box-shadow: 2px 2px 5px #545353;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;

  &:hover {
    color: white;
    background-color: #0d47a1;
  }
`;

export const CarCard = props => {
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
          <Date>{props.date}</Date>
        </Text>
      </DateGroup>
      <Group>
        <Title>Brand:</Title>
        <Text>Hola</Text>
      </Group>
      {/* <h4>Tipo:{props.tipo}</h4>
      <h4>Fecha Matriculacion:{props.fecha}</h4>
      <h4>Marca:{props.marca}</h4>
      <h4>Modelo:{props.modelo}</h4>
      <h4>{props.usuario}</h4> */}
      <Button>Edit</Button>
    </Card>
  );
};
