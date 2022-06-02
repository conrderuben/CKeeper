import { axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../utils/httpClient';
import style from './style.css';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import File from '../File';
import TextArea from '../TextArea';

export const Edit = () => {
  const [form, setForm] = useState({});
  const [fileData, setFileData] = useState();
  const [cities, setCities] = useState([]);
  const [parkingData, setParkingData] = useState({

    place:{id:0,prize:0,rented:0,published:0,description:"",height:0,long:0,width:0,photo:0,ubicationId:0},
    ubication:{id:0,street:0,postalCode:0,idCity:0}

  });


  var url=window.location.href;
  url=url.split("?");

  useEffect(() => {
    async function getData() {
      await httpClient
        .post(`http://localhost:4000/api/edit-place/${url[1]}`)
        .then(x => {
          setParkingData(x.data);
        });



    }
        getData();

      },
  
       [])


  useEffect(() => {
    async function getData() {
      const city = await httpClient.get(`http://localhost:4000/api/list-cities`).then(x => {
        setCities(x.data);
      });
    }
    getData();
  }, []);
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFileData({
      ...fileData,
      [e.target.files[0].name]: e.target.files[0]
    });
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    if (e.target.name=="street"){
    parkingData.ubication.street=e.target.value
    }
    if (e.target.name=="pc"){
    parkingData.ubication.postalCode=e.target.value
    }
    if (e.target.name=="description"){
    parkingData.place.description=e.target.value
    }
    if (e.target.name=="height"){
    parkingData.place.height=e.target.value
    }
    if (e.target.name=="width"){
    parkingData.place.width=e.target.value
    }
    if (e.target.name=="long"){
    parkingData.place.long=e.target.value
    }
    if (e.target.name=="number"){
      parkingData.ubication.number=e.target.value
      }
    if (e.target.name=="price"){
    parkingData.place.prize=e.target.value
    }

console.log(form)

  };

  const send = e => {
  
    console.log('LLEGO');
    const data = new FormData();
    console.log(fileData);
    var cont = 0;
    for (var i in fileData) {
      data.append('photos', fileData[i]);
      cont++;
    }
    const obj = {
      form,
      cont
    };

    // httpClient
    //   .post('http://localhost:4000/api/photos', data)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    httpClient.post(`http://localhost:4000/api/edit-parking/${parkingData.place.id}/${parkingData.place.ubicationId}`, { obj }).then(navigate('/places'));
  };
  return (
    <section>

        
            <a href="/places">
              <FontAwesomeIcon icon={faArrowLeft} className="fontAwesomeLeft" />
            </a>
         
         
            <h2>EDIT PARKING</h2>
            <form onSubmit={send} className="">
              
                <Input
                  type="text" 
                  name="price" 
                  id="price" 
                  label="Price" 
                  onChange={handleChange} 
                  value={parkingData.place.prize}
                />
                <Input
                  type="number"
                  name="height"
                  value={parkingData.place.height}
                  id="height"
                  label="Height"
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  name="width"
                  id="width"
                  value={parkingData.place.width}
                  label="Width"
                  onChange={handleChange}
                />
                <Input 
                  type="number" 
                  name="long" 
                  id="long" 
                  value={parkingData.place.long} 
                  label="Long" 
                  onChange={handleChange} 
                />
              
                <File 
                  onChange={handleInputChange} 
                />
            
            
                <Input
                  type="text"
                  name="street"
                  id="street"
                  label="Street"
                  value={parkingData.ubication.street}
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  name="pc"
                  id="pc"
                  value={parkingData.ubication.postalCode}
                  label="Postal Code"
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  name="number"
                  id="number"
                  value={parkingData.ubication.number}
                  label="Number"
                  onChange={handleChange}
                />
                <select name="cities" className="form-control " onChange={handleChange}>
                  {cities.map(cit => (
                    <option value={cit.id} key={cit.id} selected={parkingData.ubication.idCity==cit.id?"selected":''}>
                      {cit.name}
                    </option>
                  ))}
                </select>
               
                <TextArea
                  className="description"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={parkingData.place.description}
                  onChange={handleChange}
                />

                <button className="submitParking">Send It!</button>
            
            </form>
        
    </section>
  );
};
