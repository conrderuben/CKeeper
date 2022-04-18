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
import Input from './Input';
import File from './File';

const Container = styled.div`
  display: flex;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const ImgContainer = styled.div`
  flex: 1;
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
  /* background-color: #ffffff; */
  height: 100%;
  max-height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin:auto;
  margin-top: 10%;
  align-items: center;
justify-content: center;
  font-size: 5vh;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;

`;

const FormContainer = styled.div`
  height: 100vh;
  flex: 1;
  margin: 3% 10% 10% 10%;
  
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
  // const [cities, setCities] = useState([]);

  // useEffect(() => {
  //   async function getData() {

  //     let cities = Promise.all(
  //       cities.map(citie => {
  //         return axios
  //           .get(`http://localhost:4000/api/get-brand-by-id/`)
          
  //             const obj = {
  //               nombre: citie.nombre

               
  //             };
  //             console.log(obj);
  //             return obj;
           
  //       })
  //     )
  //   }

  //   getData();
  // }, []);
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
        <a name="about-us"></a>
        <Image src={fondo2} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>New Parking</Title>
        <FormContainer>
          <form onSubmit={handleSubmit}>
          <SubTitle>Location</SubTitle>
          <Input
              type="text"
              name="street"
              id="street"
              label="Street"
             
     />

<InputContainer>


<Input
              type="number"
              name="pc"
              id="pc"
              label="Postal Code"
             
     />
     <Input
              type="number"
              name="number"
              id="number"
              label="Number"
             
     /><select name='cities'
    
>
  <option value={list.nombre}>s{list.nombre}</option>
  </select>
            </InputContainer>
            <SubTitle>About Parking</SubTitle>
            <Input
              type="number"
              name="price"
              id="price"
              label="Price"
             
     />
     
     
     
     <File/>

<TextArea  
     className="description"
     name="description"
     cols="10"
     rows="10"
     id="description"
     placeholder="Description"

/>


            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </FormContainer>
      </DescriptionContainer>
    </Container>
  );
};
