import React, { useState } from 'react';
import styled from 'styled-components';
import fondo2 from '../assets/img/fondo2.jpg';
import fondo1 from '../assets/img/fondo1.jpg';
import fondo3 from '../assets/img/fondo3.jpg';
import fondo4 from '../assets/img/fondo4.jpg';
import fondo5 from '../assets/img/fondo5.jpg';
import { validator } from '../formValidator';

import Axios from 'axios';
import { httpClient } from '../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const Container = styled.div`
  display: flex;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const ImgContainer = styled.div`
  flex:2;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  /* background-color: #ffffff; */
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 10vh;
  margin-bottom: 7vh;
  
`;

const Title = styled.h1`
  
  font-size: 60px;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
`;

const FormContainer = styled.div`
  margin: 10px;
`;

const validation = (e, exp) => {
  validator(exp, e.target);
};

export const Form = () => {
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
    httpClient.post('/registro', { form }).then(() => {
      navigate('/login');
    });
  };
  return (
    <Container>
      <ImgContainer>
        <a name="about-us"></a>
        <Image src={fondo3} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>Registrate</Title>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <Input
                exp={/^[A-Za-z0-9_\.-]{8,20}$/}
                type="text"
                name="user"
                id="user"
                label="User"
                onChange={handleChange}
              ></Input>
              <Input
                exp={/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/}
                type="password"
                name="password"
                id="password"
                label="Password"
                onChange={handleChange}
              ></Input>
              <Input
                exp={
                  /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{2}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,17}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/
                }
                type="text"
                name="name"
                id="name"
                label="Name"
                onChange={handleChange}
              ></Input>
              <Input
                exp={/^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{3,20}$/}
                type="text"
                name="surname"
                id="surname"
                label="Surname"
                onChange={handleChange}
              ></Input>
              <Input
                type="date"
                name="date"
                id="date"
                label="Born date"
                onChange={handleChange}
              ></Input>
              <Input
                exp={
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                }
                type="email"
                name="email"
                id="email"
                label="Email"
                onChange={handleChange}
              ></Input>
              <Input
                exp={/^[6-9]\d\d{3}\d{2}\d{2}$/}
                type="tel"
                name="telephone"
                id="telephone"
                label="Telephone"
                onChange={handleChange}
              ></Input>

              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </FormContainer>
      </DescriptionContainer>
    </Container>
  );
};
