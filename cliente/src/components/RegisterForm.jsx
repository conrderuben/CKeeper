import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import fondo2 from '../assets/img/fondo2.jpg';
import fondo1 from '../assets/img/fondo1.jpg';
import fondo3 from '../assets/img/fondo3.jpg';
import fondo4 from '../assets/img/fondo4.jpg';
import fondo5 from '../assets/img/fondo5.jpg';
import { validator } from '../formValidator';
import TextArea from './TextArea';
import Axios from 'axios';
import { httpClient } from '../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import InputValidated from './InputValidated';

const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  box-sizing: border-box;
  height: 100%;
`;

const ImgContainer = styled.div`
  flex: 2;
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
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 5rem 1rem 1rem 2rem;
  font-size: 45px;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
`;

const FormContainer = styled.div`
  flex: 1;
  padding-bottom: 143px;
  height: 100%;
  margin: 1rem 2rem;
`;
const SubTitle = styled.h2`

 color: black;
 font-size:30px;

 `;
const InputContainer = styled.div`
 
    display: inline-flex;
 
    justify-content: space-around;

    
    width: 100%;
    
    `;
const validation = (e, exp) => {
  validator(exp, e.target);
};

export const Form = () => {

  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:4000/api/parking/",
    })
      .then((response) => {
        setList(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);



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
        <Image src={fondo3} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>New Parking</Title>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <InputValidated
              exp={/^[A-Za-z0-9_\.-]{8,20}$/}
              type="text"
              name="usuario"
              id="user"
              label="User"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/}
              type="password"
              name="contraseña"
              id="password"
              label="Password"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={
                /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{2}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,17}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/
              }
              type="text"
              name="nombre"
              id="name"
              label="Name"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={/^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{3,20}$/}
              type="text"
              name="apellido"
              id="surname"
              label="Surname"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              type="date"
              name="fechaNacimiento"
              id="date"
              label="Born date"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
              }
              type="email"
              name="correo"
              id="email"
              label="Email"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={/^[6-9]\d\d{3}\d{2}\d{2}$/}
              type="tel"
              name="telefono"
              id="telephone"
              label="Telephone"
              onChange={handleChange}
            ></InputValidated>

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </FormContainer>
      </DescriptionContainer>
    </Container>
  );
};
