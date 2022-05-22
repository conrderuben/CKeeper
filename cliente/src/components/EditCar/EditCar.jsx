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






export const EditCar = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({"type":"car","typeId":1});
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([52]);

  const [carData,setCarData]=useState({
car:{id: 20, type: 'car', matriculationDate: '2000-02-10T00:00:00.000Z', userId: 1, typeId: 105, createdAt: '2022-03-21T18:20:11.000Z', updatedAt: '2022-03-21T18:20:11.000Z'},
brand:{id: 55, name: 'Citroën', createdAt: '2022-03-21T18:20:11.000Z', updatedAt: '2022-03-21T18:20:11.000Z'}
  });
  
  
  

  var url=window.location.href;
  url=url.split("?");
  
  var carDate = carData.car.matriculationDate;

  carDate = carDate.split("T");

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; 
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
 }
 
 if (mm < 10) {
    mm = '0' + mm;
 } 
     
 today = yyyy + '-' + mm + '-' + dd;

  const handleChange = e => {
    

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });


    if (e.target.name=="brand"){
      carData.brand.id=e.target.value
    setSelectedBrand(
      e.target.value
    );

      }


      if (e.target.name=="matriculationDate"){
        
        carData.car.matriculationDate=e.target.value;
        
        
          }
  };



  useEffect(() => {
    async function getData() {
      const carData = await httpClient
        .get(`http://localhost:4000/api/edit-car/${url[1]}`)
        .then(x => {
          setCarData(x.data);
        });



    }
        getData();

      },
  
       [])


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
      httpClient.get(`http://localhost:4000/api/typeById/${carData.brand.id}`).then(x => {
        setTypes(x.data);
        setForm({
          typeId:types[0].id
          })
      });
    }
   getData();
      },
  
      [carData.brand.id]);
  const handleSubmit = e => {
    httpClient.post(`http://localhost:4000/api/update-vehicle/${carData.car.id}`,{form}).then( navigate('/cars'))
  }
  console.log(form)
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
            <h2>EDIT VEHICLE</h2>
              <form onSubmit={handleSubmit} className="addCarForm">

               
                <div className='carContainer'>
               
                <label htmlFor="type">
                <b>Type</b>
              </label>
              <br />
              <select name="type" onChange={handleChange}>
               
               
                 <option
                    value="car"
                    selected={carData.car.type=="car"?"selected":''}>
                      Car
                 </option> 
                 <option
                    value="motorcycle" selected={carData.car.type=="motorcycle"?"selected":''}>
                      Motorcycle
                 </option> 
                 
                 <option
                    value="van" selected={carData.car.type=="van"?"selected":''}>
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
                   value={brn.id} key={brn.id} selected={carData.brand.id==brn.id?"selected":''}>
                  {brn.name}
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
                    value={typ.id} key={typ.id} selected={carData.car.typeId==typ.id?"selected":''}>{typ.name} 
                 </option> 
      )}
              </select>

            <br/>
            <br/><br/>
            <input
              type="date"
              value={carDate[0]}
              min='1899-01-01'
              name="matriculationDate"
              id="matriculationDate"
              max={today}
              label="Matriculation date"
              onChange={handleChange}
            />


              
 <button  className="submitCar">Create It!</button>
              </div>
              



               
              </form>
            </div>
          </div>
          
        </div>
      </section>
    
  );
};

