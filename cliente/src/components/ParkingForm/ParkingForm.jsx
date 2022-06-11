import { axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../utils/httpClient';
import ReactDOM from 'react-dom';
import style from './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import File from '../File';
import TextArea from '../TextArea';

export const Form = () => {
  const [form, setForm] = useState({});
  const [fileData, setFileData] = useState();
  const [cities, setCities] = useState([]);

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
  };

  const send =async () => {
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
console.log(data)
    

    await httpClient.post('/add-parking', { obj }).then( 
      await httpClient
      .post('http://localhost:4000/api/photos', data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      );


   



  };


  
  return (
    <section className='editParkingSection '>
    <div id='parkingContainer' className='editParkingContainer '>

        
        <div className='titleContainer'>
           
         
            <h2 className='title'>ADD PARKING</h2>
        </div>
            <form onSubmit={send} className="editForm">
                <Input
                  type="text"
                  name="street"
                  className="editInput"
                  id="street"
                  label="Street"
                  divClass="inputDiv"
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  name="pc"
                  id="pc"
                  className="editInput"
                  label="Postal Code"
                  divClass="inputDiv"
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  name="number"
                  id="number"
                  className="editInput"
                  label="Number"
                  divClass="inputDiv"
                  onChange={handleChange}
                />
  
             
                <div className={"mb-3 form-floating selectContainer" }>
                <select name="cities" className="form-control " id="cities" onChange={handleChange}>
                  {cities.map(cit => (
                    <option value={cit.id} key={cit.id}>
                      {cit.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="cities" className={"editInput form-label" }>
               Cities
      </label>
    </div>
             
                <TextArea
                  className="textAreaDescription editInput"
                  label="Description"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={handleChange}
                  divClass="textAreaContent"
                />
                <Input
                  type="text" 
                  name="price" 
                  className="editInput"
                  id="price" 
                  label="Price" 
                  onChange={handleChange} 
                  divClass="inputDiv"
                />
                <Input
                  type="number"
                  name="height"
                  className="editInput"
                  id="height"
                  label="Height"
                  divClass="inputDiv"
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  name="width"
                  id="width"
                  className="editInput"
                  label="Width"
                  divClass="inputDiv"
                  onChange={handleChange}
                />
                <Input 
                  type="number" 
                  name="long" 
                  className="editInput"
                  id="long" 
                  label="Long" 
                  divClass="inputDivLong"
                  onChange={handleChange} 
                />
              
                <File 
                  onChange={handleInputChange} 
                />
                {/* <button className="">Send It!</button> */}
                <a onClick={send} className='submitButtonForm'>
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
