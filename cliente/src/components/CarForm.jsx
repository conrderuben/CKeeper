import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import fondo6 from '../assets/img/fondo6.jpg';

import axios from 'axios';
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
 
`;



export const CarForm = () => {
  const [form, setForm] = useState({});
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([52]);

  
  const handleChange = e => {
    

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    if (e.target.name=="brand"){
    setSelectedBrand(
      e.target.value
    );

      }
  };






  useEffect(() => {
    async function getData() {
      const brand = await axios
        .get(`http://localhost:4000/api/list-brands`)
        .then(x => {
          setBrands(x.data);
        });
    }
        getData();
      },
  
       []);
      
  useEffect(() => {

    async function getData() {
      httpClient.get(`http://localhost:4000/api/typeById/${selectedBrand}`).then(x => {
        setTypes(x.data);
      });
    }
   getData();
      },
  
      [selectedBrand]);
  const handleSubmit = e => {
  }
  return (
    <Container>
      <ImgContainer>
        <a name="add-car"></a>
        <Image src={fondo6} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>Register Vehicle</Title>
        <FormContainer>
          <form onSubmit={handleSubmit}>
        <MarcaContainer>
          <label for="type">
                <b>Type</b>
              </label>
              <br />
              <Select name="type" onChange={handleChange}>
               
               
                 <option
                    value="car">
                      Car
                 </option> 
                 <option
                    value="motorcycle">
                      Motorcycle
                 </option> 
                 
                 <option
                    value="van">
                      Van
                 </option> 
                
              </Select>
              </MarcaContainer>
            <MarcaContainer>
              <label for="brand">
                <b>Brand</b>
              </label>
              <br />
              <Select name="brand" onChange={handleChange}>
               
               {brands.map((brn) =>
                 <option
                    value={brn.id} key={brn.id}>{brn.name} 
                 </option> 
      )}

              </Select>
            </MarcaContainer>




            <ModeloContainer>
              <label for="modelo">
                <b>Model</b>
              </label>
              <br />
              <Select name="typeId">
              {types.map((typ) =>
                 <option
                    value={typ.id} key={typ.id}>{typ.name} 
                 </option> 
      )}
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
