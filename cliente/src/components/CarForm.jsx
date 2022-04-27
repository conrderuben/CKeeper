import React, { useState } from 'react';
import styled from 'styled-components';
import fondo6 from '../assets/img/fondo6.jpg';
import { validator } from '../formValidator';

import Axios from 'axios';
import { httpClient } from '../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const Container = styled.div`
  display: flex;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const ImgContainer = styled.div`
  flex: 2;
  padding: 0;
  margin: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin-top: 15%;
  flex: 1;
  font-size: 5vh;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
  text-align: center;
`;

const FormContainer = styled.div`
  height: 100vh;
  flex: 1;
  margin: 3% 5% 70% 5%;
`;
const Select = styled.select`
  width: 200%;
  flex: 1;
  text-align: center;
`;
const MarcaContainer = styled.div`
  flex: 1;
  float: left;
  padding: 0% 10% 4% 0%;
`;
const ModeloContainer = styled.div`
  flex: 1;
  float: right;
  padding: 0% 30% 4% 10%;
`;

const validation = (e, exp) => {
  validator(exp, e.target);
};

export const CarForm = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    httpClient.post('/', { form }).then(() => {
      navigate('/login');
    });
  };
  return (
    <Container>
      <ImgContainer>
        <a name="add-car"></a>
        <Image src={fondo6} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>Registrar vehículos</Title>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Input
              exp={/^[A-Za-z0-9_\.-]{8,20}$/}
              type="text"
              name="tipo"
              id="type"
              label="Type"
              onChange={handleChange}
            ></Input>
            <MarcaContainer>
              <label for="marca">
                <b>Brand</b>
              </label>
              <br />
              <Select name="marca">
                <option value={'abarth'}>Abarth</option>
                <option value={'audi'}>Audi</option>
                <option value={'bmw'}>BMW</option>
                <option value={'chevrolet'}>Chevrolet</option>
                <option value={'citroen'}>Citroen</option>
                <option value={'dacia'}>Dacia</option>
                <option value={'fiat'}>Fiat</option>
                <option value={'ford'}>Ford</option>
                <option value={'honda'}>Honda</option>
                <option value={'jaguar'}>Jaguar</option>
                <option value={'jeep'}>Jeep</option>
                <option value={'kia'}>Kia</option>
                <option value={'mercedes'}>Mercedes</option>
                <option value={'mini'}>Mini</option>
                <option value={'mitsubishi'}>Mitsubishi</option>
                <option value={'nissan'}>Nissan</option>
                <option value={'opel'}>Opel</option>
                <option value={'peugeot'}>Peugeot</option>
                <option value={'renault'}>Renault</option>
                <option value={'seat'}>Seat</option>
                <option value={'skoda'}>Skoda</option>
                <option value={'smart'}>Smart</option>
                <option value={'subaru'}>Subaru</option>
                <option value={'suzuki'}>Suzuki</option>
                <option value={'tata'}>Tata</option>
                <option value={'tesla'}>Tesla</option>
                <option value={'toyota'}>Toyota</option>
                <option value={'volskwagen'}>Volskwagen</option>
                <option value={'volvo'}>Volvo</option>
              </Select>
            </MarcaContainer>
            <ModeloContainer>
              <label for="modelo">
                <b>Model</b>
              </label>
              <br />
              <Select name="modelo">
                <option value={'model1'}>Model1</option>
                <option value={'audi'}>Audi</option>
                <option value={'bmw'}>BMW</option>
                <option value={'chevrolet'}>Chevrolet</option>
                <option value={'citroen'}>Citroen</option>
                <option value={'dacia'}>Dacia</option>
                <option value={'fiat'}>Fiat</option>
                <option value={'ford'}>Ford</option>
                <option value={'honda'}>Honda</option>
                <option value={'jaguar'}>Jaguar</option>
                <option value={'jeep'}>Jeep</option>
                <option value={'kia'}>Kia</option>
                <option value={'mercedes'}>Mercedes</option>
                <option value={'mini'}>Mini</option>
                <option value={'mitsubishi'}>Mitsubishi</option>
                <option value={'nissan'}>Nissan</option>
                <option value={'opel'}>Opel</option>
                <option value={'peugeot'}>Peugeot</option>
                <option value={'renault'}>Renault</option>
                <option value={'seat'}>Seat</option>
                <option value={'skoda'}>Skoda</option>
                <option value={'smart'}>Smart</option>
                <option value={'subaru'}>Subaru</option>
                <option value={'suzuki'}>Suzuki</option>
                <option value={'tata'}>Tata</option>
                <option value={'tesla'}>Tesla</option>
                <option value={'toyota'}>Toyota</option>
                <option value={'volskwagen'}>Volskwagen</option>
                <option value={'volvo'}>Volvo</option>
              </Select>
            </ModeloContainer>
            <br />
            <br />
            <br />
            <Input
              type="text"
              name="modeloVehiculo"
              id="modelVehicle"
              label="Model"
              onChange={handleChange}
            ></Input>
            <Input
              type="date"
              name="fechaMatriculacion"
              id="registrationDate"
              label="Registration date"
              onChange={handleChange}
            ></Input>

            <button type="submit" className="btn btn-primary">
              Registrate car
            </button>
          </form>
        </FormContainer>
      </DescriptionContainer>
    </Container>
  );
};
