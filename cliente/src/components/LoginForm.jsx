import React, { useState } from 'react';
import styled from 'styled-components';
import fondo5 from '../assets/img/fondo5.jpg';
import { validator } from '../formValidator';
import Axios from 'axios';
import { httpClient } from '../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const Container = styled.div`
  display: flex;
  padding: 0;
  height: 100vh;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const ImgContainer = styled.div`
  flex: 3;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  /* background-color: #ffffff; */
`;

const Title = styled.h1`
  margin: 5rem 1rem 1rem 2rem;
  font-size: 45px;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
`;

const FormContainer = styled.div`
  flex: 1;
  margin: 1rem 2rem;
`;

const validation = (e, exp) => {
  validator(exp, e.target);
};

export const LoginForm = () => {
  Axios.defaults.withCredentials = true;
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
    httpClient.post('/login', { form }).then(res => {
      if (!res.data.error) {
        //   const cookies = new Cookies();
        //   cookies.set('user', res.data.obj, { path: '/' });
        navigate('/main');
      } else {
        navigate('/login');
      }
    });
  };
  return (
    <Container>
      <ImgContainer>
        <a name="about-us"></a>
        <Image src={fondo5} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>Login</Title>
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

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </FormContainer>
      </DescriptionContainer>
    </Container>
  );
};
