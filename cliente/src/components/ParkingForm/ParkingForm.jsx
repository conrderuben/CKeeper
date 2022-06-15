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

  const send = e => {
    e.preventDefault();

    const data = new FormData();
    var cont = 0;
    for (var i in fileData) {
      data.append('photos', fileData[i]);
      cont++;
    }
    const obj = {
      form,
      cont
    };

    httpClient.post('/add-parking', { obj }).then(x => {
      httpClient
        .post(`http://localhost:4000/api/photos/${x.data.id}`, data)
        .then(navigate('/places'));
    });
  };

  return (
    <section className="editParkingSection ">
      <div id="parkingContainer" className="editParkingContainer ">
        <div className="titleContainer">
          <h2 className="title">ADD PARKING</h2>
        </div>
        <form onSubmit={send} className="editForm">
          <Input
            exp={/^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{2}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/}
            type="text"
            name="street"
            className="editInput"
            id="street"
            label="Street"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />
          <Input
            exp={/^\d{5}$/}
            type="number"
            name="pc"
            id="pc"
            className="editInput"
            label="Postal Code"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />
          <Input
            exp={/^\d{1,2}$/}
            type="number"
            name="number"
            id="number"
            className="editInput"
            label="Number"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />

          <div className={'mb-3 form-floating selectContainer'}>
            <select
              name="cities"
              className="form-control "
              id="cities"
              required
              onChange={handleChange}
            >
              {cities.map(cit => (
                <option value={cit.id} key={cit.id}>
                  {cit.name}
                </option>
              ))}
            </select>
            <label htmlFor="cities" className={'editInput form-label'}>
              Cities
            </label>
          </div>

          <TextArea
            exp={
              /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,98}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/
            }
            className="textAreaDescription editInput"
            label="Description"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleChange}
            divClass="textAreaContent"
          />
          <Input
            exp={/^[1-9]{1}\d{0,3}$/}
            type="text"
            name="price"
            className="editInput"
            id="price"
            label="Price(€) / Day"
            required
            onChange={handleChange}
            divClass="inputDiv"
          />
          <Input
            exp={/^\d{1,3}$/}
            type="number"
            name="height"
            className="editInput"
            id="height"
            label="Height (cm)"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />
          <Input
            exp={/^\d{1,3}$/}
            type="number"
            name="width"
            id="width"
            className="editInput"
            label="Width (cm)"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />
          <Input
            exp={/^\d{1,3}$/}
            type="number"
            name="long"
            className="editInput"
            id="long"
            label="Long (cm)"
            divClass="inputDivLong"
            required
            onChange={handleChange}
          />

          <File required onChange={handleInputChange} />
          {/* <button className="">Send It!</button> */}
          <button type="submit" className="submitButtonForm">
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
