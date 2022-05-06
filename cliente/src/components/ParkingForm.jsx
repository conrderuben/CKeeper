import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import fondo2 from '../assets/img/fondo2.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from "./Input"
import { httpClient } from '../utils/httpClient';
import File from "./File"
import TextArea from "./TextArea"

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


export const Form = () => {
  

  const [form, setForm] = useState({});
  const [fileData,setFileData]=useState()
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getData() {
      const city = await axios
        .get(`http://localhost:4000/api/list-cities`)
        .then(x => {
          setCities(x.data);
        });
    }
        getData();
      },

       []);
  const navigate = useNavigate();

  const handleInputChange = e =>{

    setFileData({
     
      ...fileData,
      [e.target.files[0].name]:e.target.files[0]

    });

  }

  const handleChange = e => {
    setForm({
      
      ...form,
      [e.target.name]: e.target.value
    });
  };
  

const send = event => {
  const data=new FormData();
console.log(fileData)
var cont=0
  for(var i in fileData){
    data.append("photos",fileData[i])
    cont++;
   }
 const obj ={
   form,
   cont
 }

axios.post("http://localhost:4000/api/photos",data)
.then(res=>console.log(res))
.catch(err=>console.log(err));

httpClient.post('/add-parking', { obj }).then(() => {
  navigate('/login');
});
}


  return (
    <Container>
      <ImgContainer>
        <a name="about-us"></a>
        <Image src={fondo2} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>New Parking</Title>
        <FormContainer>
          <form action='#' >
          <SubTitle>Location</SubTitle>
          <Input
              type="text"
              name="street"
              id="street"
              label="Street"
              onChange={handleChange}
     />

<InputContainer>


<Input
              type="number"
              name="pc"
              id="pc"
              label="Postal Code"
              onChange={handleChange}
     />
     <Input
              type="number"
              name="number"
              id="number"
              label="Number"
              onChange={handleChange}
     />
 <select name='cities'
    className="form-control "
    onChange={handleChange}
    >
       {cities.map((cit) =>
        <option
        
        value={cit.id} key={cit.id}>{cit.name} 
                  
        </option> 
      )}
       </select>
            </InputContainer>
           
            <SubTitle>About Parking</SubTitle>
            <Input
              type="text"
              name="price"
              id="price"
              label="Price"
              onChange={handleChange}
     />


<InputContainer>


<Input
              type="number"
              name="height"
              id="height"
              label="Height"
              onChange={handleChange}
     />
     <Input
              type="number"
              name="width"
              id="width"
              label="Width"
              onChange={handleChange}
     />
  <Input
              type="number"
              name="long"
              id="long"
              label="Long"
              onChange={handleChange}
     />
            </InputContainer>

     <File onChange={handleInputChange}/>

<TextArea
     className="description"
     name="description"
     cols="10"
     rows="10"
     id="description"
     placeholder="Description"
     onChange={handleChange}
/>


            <button onClick={send} className="btn btn-primary">
              Sign in
            </button>
          </form>
        </FormContainer>
      </DescriptionContainer>
    </Container>
  );
};
