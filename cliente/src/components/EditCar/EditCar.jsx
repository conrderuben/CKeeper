import style from './style.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { httpClient } from '../../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 70%;
`;
export const EditCar = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ type: 'car', typeId: 1 });
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([52]);
  const [fileData, setFileData] = useState();

  const [carData, setCarData] = useState({
    car: {
      id: 20,
      type: 'car',
      matriculationDate: '2000-02-10T00:00:00.000Z',
      userId: 1,
      typeId: 105,
      createdAt: '2022-03-21T18:20:11.000Z',
      updatedAt: '2022-03-21T18:20:11.000Z'
    },
    brand: {
      id: 55,
      name: 'Citroën',
      createdAt: '2022-03-21T18:20:11.000Z',
      updatedAt: '2022-03-21T18:20:11.000Z'
    }
  });

  var url = window.location.href;
  url = url.split('?');

  var carDate = carData.car.matriculationDate;

  carDate = carDate.split('T');

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

    if (e.target.name == 'brand') {
      carData.brand.id = e.target.value;
      setSelectedBrand(e.target.value);
    }

    if (e.target.name == 'matriculationDate') {
      carData.car.matriculationDate = e.target.value;
    }
  };
  const handleInputChange = e => {
    setFileData({
      photo: e.target.files[0]
    });
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
  }, []);

  useEffect(() => {
    async function getData() {
      const brand = await axios.get(`http://localhost:4000/api/list-brands`).then(x => {
        setBrands(x.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      httpClient.get(`http://localhost:4000/api/typeById/${carData.brand.id}`).then(x => {
        setTypes(x.data);
  
      });
    }
    getData();
  }, [carData.brand.id]);
 
  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append('photos', fileData.photo);
    httpClient
      .post(`http://localhost:4000/api/update-vehicle/${carData.car.id}`, { form })
      .then(x => {
        console.log("Lleo")
        httpClient.post(`/car-photo/${x.data.id}`, data).then(navigate('/cars'));
      });
  };
  return (
    
    <section className='editVehicleSection '>
    <div className='editVehicleContainer '>

        
        <div className='titleContainer'>
        
          <h2 className='title'>EDIT VEHICLE</h2>
          </div>
         
            <form onSubmit={handleSubmit} className="editVehicleForm">
            <div className={"mb-3 form-floating selectVehicleContainer" }>
            <select name="type" className="form-control " id='type' onChange={handleChange}>
                  <option value="car" selected={carData.car.type == 'car' ? 'selected' : ''}>
                    Car
                  </option>
                  <option
                    value="motorcycle"
                    selected={carData.car.type == 'motorcycle' ? 'selected' : ''}
                  >
                    Motorcycle
                  </option>

                  <option value="van" selected={carData.car.type == 'van' ? 'selected' : ''}>
                    Van
                  </option>
                </select>
                <label htmlFor="type" className={"editInput form-label" }>
               Type
                </label>
            </div>
              




            <div className={"mb-3 form-floating selectVehicleContainer" }>
            <select name="brand" className="form-control " id='brand' onChange={handleChange}>
                  {brands.map(brn => (
                    <option
                      value={brn.id}
                      key={brn.id}
                      selected={carData.brand.id == brn.id ? 'selected' : ''}
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
                      selected={carData.car.typeId == typ.id ? 'selected' : ''}
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
                    value={carDate[0]}
                    min="1899-01-01"
                    max={today}
                    required
                    name="matriculationDate"
                    id="matriculationDate"
                    label="Matriculation date"
                    onChange={handleChange}
                  />
       
       <label htmlFor="matriculationDate" className={"editInput form-label" }>
       Matriculation date
                </label>
                </div>
                <div className={'mb-3 form-floating selectVehicleContainer'}>
            <input
              className=" form-control "
              type="file"
              required
              name="vehiclePhoto"
              id="inputFile1"
              onChange={handleInputChange}
              style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}
            />
          </div>
      <button type="submit" className='submitVehicleButtonForm'>
         <span></span>
         <span></span>
         <span></span>
          <span></span>
         Submit
      </button>
              
              
            </form>
          
        </div>
      
    </section>
  );
};
