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
      .post('http://localhost:4000/api/photos', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    httpClient.post('/add-parking', { obj }).then(navigate('/main'));
  };
  return (
    <section className="parking">
      <div className="parking_box">
        <div className="leftSide">
          <div className="topLink">
            <a href="/places">
              <FontAwesomeIcon icon={faArrowLeft} className="fontAwesomeLeft" />
            </a>
          </div>
          <div className="contact">
            <h2>ADD NEW PARKING</h2>
            <form onSubmit={send} className="parkingForm">
              <div className="addParking"></div>
              <div className="part2">
                <Input type="text" name="price" id="price" label="Price" onChange={handleChange} />
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
                <Input type="number" name="long" id="long" label="Long" onChange={handleChange} />
                <br />
                <br />
                <File onChange={handleInputChange} />
              </div>
              <div className="part1">
                <Input
                  type="text"
                  name="street"
                  id="street"
                  label="Street"
                  onChange={handleChange}
                />
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
                <select name="cities" className="form-control " onChange={handleChange}>
                  {cities.map(cit => (
                    <option value={cit.id} key={cit.id}>
                      {cit.name}
                    </option>
                  ))}
                </select>
                <br />
                <TextArea
                  className="description"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={handleChange}
                />

                <button className="submitParking">Send It!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
