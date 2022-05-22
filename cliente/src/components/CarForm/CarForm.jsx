import style from './style.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { httpClient } from '../../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
 } from '@fortawesome/free-solid-svg-icons';



 
export const CarForm = () => {
  const [form, setForm] = useState({"type":"car","typeId":1});
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([52]);

  const navigate = useNavigate();
  
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
    httpClient.post(`http://localhost:4000/api/add-vehicle`,{form}).then(navigate('/cars'))
  }
  return (
    
      <section className="addCar">
    
        <div className="addCar_box">
          <div className="leftPart">
            <div className="topLink">
              <a href="/places">
              <FontAwesomeIcon icon={faArrowLeft } className="fontAwesomeLeft" />
              </a>
            </div>
            <div className="contact">
            <h2>ADD NEW CAR</h2>
              <form onSubmit={handleSubmit} className="addCarForm">

               
                <div className='carContainer'>
               
                <label htmlFor="type">
                <b>Type</b>
              </label>
              <br />
              <select name="type" onChange={handleChange}>
               
               
                 <option
                    value="car"
                    selected>
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
                
              </select>
              <label htmlFor="brand">
                <b>Brand</b>
              </label>
              <br />
              <select name="brand" onChange={handleChange}>
               
               {brands.map((brn) =>
                 <option
                    value={brn.id} key={brn.id}>{brn.name} 
                 </option> 
      )}

              </select>




              <label htmlFor="model">
                <b>Model</b>
              </label>
              <br />
              <select name="typeId" onChange={handleChange}>
              <option>Selecciona...</option>
              {types.map((typ) =>
                 <option
                    value={typ.id} key={typ.id}>{typ.name} 
                 </option> 
      )}
              </select>

            <br/>
            <br/><br/>
            <Input
              type="date"
              name="matriculationDate"
              id="matriculationDate"
              label="Matriculation date"
              onChange={handleChange}
            ></Input>


              
 <button  className="submitCar">Create It!</button>
              </div>
              



               
              </form>
            </div>
          </div>
          
        </div>
      </section>
    
  );
};

