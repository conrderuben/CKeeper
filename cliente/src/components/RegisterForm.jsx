import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fondo3 from '../assets/img/fondo3.jpg';
import { validator } from '../formValidator';
import { httpClient } from '../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import InputValidated from './InputValidated';

const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  box-sizing: border-box;
  height: 100%;
  @media only screen and (max-width: 850px) {
    .imgContainer {
      display: none;
    }
  }
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
  overflow: scroll;
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

export const Form = () => {
  const [form, setForm] = useState({});
  const [users, setAllUsers] = useState([]);
  const navigate = useNavigate();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    if (e.target.name == 'user') {
      for (var i = 0; i < users.length; i++) {
        if (users[i].user.toLowerCase() == e.target.value.toLowerCase()) {
          setTimeout(() => {
            document.getElementById('user').classList.remove('is-valid');
            document.getElementById('user').classList.remove('is-invalid');
            document.getElementById('user').classList.add('is-invalid');
          }, 100);
        }
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    httpClient.post('/confirm-mail', { form });
    navigate('/login?verifyMessage=true');
  };
  useEffect(() => {
    async function getData() {
      await httpClient.post(`/get-users`).then(x => {
        setAllUsers(x.data);
      });
    }
    getData();
  }, []);
  return (
    <Container>
      <ImgContainer className="imgContainer">
        <Image src={fondo3} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>Register</Title>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <InputValidated
              exp={/^[A-Za-z0-9_\.-]{8,20}$/}
              type="text"
              name="user"
              id="user"
              label="User"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/}
              type="password"
              name="password"
              id="password"
              label="Password"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={
                /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{2}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,17}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/
              }
              type="text"
              name="name"
              id="name"
              label="Name"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={/^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{3,20}$/}
              type="text"
              name="surname"
              id="surname"
              label="Surname"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              type="date"
              name="bornDate"
              id="date"
              min="1899-01-01"
              max="2003-01-01"
              label="Born date"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
              }
              type="email"
              name="mail"
              id="email"
              label="Email"
              onChange={handleChange}
            ></InputValidated>
            <InputValidated
              exp={/^[6-9]\d\d{3}\d{2}\d{2}$/}
              type="tel"
              name="phone"
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
