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
    
    <section className='editVehicleSection '>
    <div id='vehicleContainer' className='editVehicleContainer '>

        
        <div className='titleContainer'>
        
          <h2 className='title'>ADD VEHICLE</h2>
          </div>
         
            <form onSubmit={handleSubmit} className="editVehicleForm">
            <div className={"mb-3 form-floating selectVehicleContainer" }>
            <select name="type" className="form-control " id='type' onChange={handleChange}>
              <option>Selecciona...</option>
                  <option value="car">
                    Car
                  </option>
                  <option
                    value="motorcycle"
                  >
                    Motorcycle
                  </option>

                  <option value="van">
                    Van
                  </option>
                </select>
                <label htmlFor="type" className={"editInput form-label" }>
               Type
                </label>
            </div>
              




            <div className={"mb-3 form-floating selectVehicleContainer" }>
            <select name="brand" className="form-control " id='brand' onChange={handleChange}>
            <option>Selecciona...</option>
                  {brands.map(brn => (
                    <option
                      value={brn.id}
                      key={brn.id}
                    >
                      {brn.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="brand" className={"editInput form-label" }>
                Brand
                </label>
            </div>
             
        
                
            <div className={"mb-3 form-floating selectVehicleContainer" }>
            <select name="typeId" className="form-control " id='model' onChange={handleChange}>
                  <option>Selecciona...</option>
                  {types.map(typ => (
                    <option
                      value={typ.id}
                      key={typ.id}
                     
                    >
                      {typ.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="model" className={"editInput form-label" }>
                Model
                </label>
            </div>
              
            <div className={"mb-3 form-floating selectVehicleContainer" }>
                  <input
                    className="dateCar form-control "
                    type="date"
                    min="1899-01-01"
                    name="matriculationDate"
                    id="matriculationDate"
                    label="Matriculation date"
                    onChange={handleChange}
                  />
       
       <label htmlFor="matriculationDate" className={"editInput form-label" }>
       Matriculation date
                </label>
                </div>
      <a onClick={handleSubmit} className='submitVehicleButtonForm'>
         <span></span>
         <span></span>
         <span></span>
          <span></span>
         Submit
      </a>
              
              
            </form>
          
        </div>
      
    </section>
    
  );
};

