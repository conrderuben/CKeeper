import { axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../utils/httpClient';
import style from './style.scss';
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
    place: {
      id: 0,
      prize: 0,
      rented: 0,
      published: 0,
      description: '',
      height: 0,
      long: 0,
      width: 0,
      photo: 0,
      ubicationId: 0
    },
    ubication: { id: 0, street: 0, postalCode: 0, idCity: 0 }
  });

  var url = window.location.href;
  url = url.split('?');

  useEffect(() => {
    async function getData() {
      await httpClient.post(`/edit-place/${url[1]}`).then(x => {
        setParkingData(x.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const city = await httpClient.get(`/list-cities`).then(x => {
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

    if (e.target.name == 'street') {
      parkingData.ubication.street = e.target.value;
    }
    if (e.target.name == 'pc') {
      parkingData.ubication.postalCode = e.target.value;
    }
    if (e.target.name == 'description') {
      parkingData.place.description = e.target.value;
    }
    if (e.target.name == 'height') {
      parkingData.place.height = e.target.value;
    }
    if (e.target.name == 'width') {
      parkingData.place.width = e.target.value;
    }
    if (e.target.name == 'long') {
      parkingData.place.long = e.target.value;
    }
    if (e.target.name == 'number') {
      parkingData.ubication.number = e.target.value;
    }
    if (e.target.name == 'price') {
      parkingData.place.prize = e.target.value;
    }

    console.log(form);
  };

  const send = e => {
    e.preventDefault();

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

    httpClient
      .post(
        `http://localhost:4000/api/edit-parking/${parkingData.place.id}/${parkingData.place.ubicationId}`,
        { obj }
      )
      .then(navigate('/places'));
  };
  return (
    <section className="editParkingSection ">
      <div className="editParkingContainer ">
        <div className="titleContainer">
          <h2 className="title">EDIT PARKING</h2>
        </div>
        <form onSubmit={send} className="editForm">
          <Input
            exp={ /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{2}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/}
            type="text"
            name="street"
            className="editInput"
            id="street"
            label="Street"
            divClass="inputDiv"
            required
            value={parkingData.ubication.street}
            onChange={handleChange}
          />
          <Input
            exp={ /^\d{5}$/}
            type="number"
            name="pc"
            id="pc"
            className="editInput"
            value={parkingData.ubication.postalCode}
            label="Postal Code"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />
          <Input
            exp={ /^\d{1,2}$/}
            type="number"
            name="number"
            id="number"
            className="editInput"
            value={parkingData.ubication.number}
            label="Number"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />

          <div className={'mb-3 form-floating selectContainer'}>
            <select name="cities" className="form-control " id="cities" required onChange={handleChange}>
              {cities.map(cit => (
                <option
                  value={cit.id}
                  key={cit.id}
                  defaultValue={parkingData.ubication.idCity == cit.id ? 'selected' : ''}
                >
                  {cit.name}
                </option>
              ))}
            </select>
            <label htmlFor="cities" className={'editInput form-label'}>
              Cities
            </label>
          </div>

          <TextArea
            className="textAreaDescription editInput"
            label="Description"
            name="description"
            id="description"
            placeholder="Description"
            value={parkingData.place.description}
            onChange={handleChange}
            divClass="textAreaContent"
          />
          <Input
            exp={ /^[1-9]{1}\d{0,3}$/}
            type="text"
            name="price"
            className="editInput"
            id="price"
            label="Price"
            required
            onChange={handleChange}
            value={parkingData.place.prize}
            divClass="inputDiv"
          />
          <Input
            exp={ /^\d{1,3}$/}
            type="number"
            name="height"
            className="editInput"
            value={parkingData.place.height}
            id="height"
            label="Height"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />
          <Input
            exp={ /^\d{1,3}$/}
            type="number"
            name="width"
            id="width"
            className="editInput"
            value={parkingData.place.width}
            label="Width"
            divClass="inputDiv"
            required
            onChange={handleChange}
          />
          <Input
            exp={ /^\d{1,3}$/}
            type="number"
            name="long"
            className="editInput"
            id="long"
            value={parkingData.place.long}
            label="Long"
            divClass="inputDivLong"
            required
            onChange={handleChange}
          />

          <File required onChange={handleInputChange} />
          {/* <button className="">Send It!</button> */}
          <button type="submit" onClick={send} className="submitButtonForm">
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
