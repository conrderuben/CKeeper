import React, { useState, useEffect } from 'react';
import { httpClient } from '../../utils/httpClient';
import { useNavigate } from 'react-router-dom';

export const CarForm = () => {
  const [form, setForm] = useState({ type: 'car', typeId: 1 });
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [fileData, setFileData] = useState();
  const [changeType, setChangeType] = useState({ num: 90, num2: 0 });

  var num = 90;
  var num2 = 0;
  const [selectedBrand, setSelectedBrand] = useState([52]);

  const navigate = useNavigate();

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
      setSelectedBrand(e.target.value);
    }
    if (e.target.name == 'type') {
      if (e.target.value == 'car') {
        setChangeType({
          num: 90,
          num2: 0
        });
        setSelectedBrand(52);
      }
      if (e.target.value == 'motorcycle') {
        setChangeType({
          num: 168,
          num2: 91
        });
        setSelectedBrand(130);
      }
    }
  };

  const handleInputChange = e => {
    setFileData({
      photo: e.target.files[0]
    });
  };

  useEffect(() => {
    async function getData() {
      const brand = await httpClient.get(`/list-brands`).then(x => {
        setBrands(x.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      httpClient.get(`/typeById/${selectedBrand}`).then(x => {
        setTypes(x.data);
      });
    }
    getData();
  }, [selectedBrand]);

  const handleSubmit = e => {
    e.preventDefault();
 console.log(document.getElementById("model").value)
 if (document.getElementById("model").value=="choose"){
  alert("Please choose a brand option");
 }else{
    const data = new FormData();
    data.append('photos', fileData.photo);

    httpClient.post(`/add-vehicle`, { form }).then(x => {
      httpClient.post(`/car-photo/${x.data.id}`, data).then(navigate('/cars'));
    });
  }
  };
  return (
    <section className="editVehicleSection ">
      <div id="vehicleContainer" className="editVehicleContainer ">
        <div className="titleContainer">
          <h2 className="title">ADD VEHICLE</h2>
        </div>

        <form onSubmit={handleSubmit} className="editVehicleForm">
          <div className={'mb-3 form-floating selectVehicleContainer'}>
            <select name="type" className="form-control " id="type" onChange={handleChange}>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
            <label htmlFor="type" className={'editInput form-label'}>
              Type
            </label>
          </div>

          <div className={'mb-3 form-floating selectVehicleContainer'}>
            <select name="brand" className="form-control " id="brand" onChange={handleChange}>
              {brands.map(brn =>
                brn.id <= changeType.num && brn.id >= changeType.num2 ? (
                  <option value={brn.id} key={brn.id}>
                    {brn.name}
                  </option>
                ) : (
                  ''
                )
              )}
            </select>

            <label htmlFor="brand" className={'editInput form-label'}>
              Brand
            </label>
          </div>

          <div className={'mb-3 form-floating selectVehicleContainer'}>
            <select name="typeId" className="form-control " id="model" onChange={handleChange}>
            <option selected="selected" value="choose">Choose an Option...</option>

              {types.map(typ => (
                <option value={typ.id} key={typ.id}>
                  {typ.name}
                </option>
              ))}
            </select>

            <label htmlFor="model" className={'editInput form-label'}>
              Model
            </label>
          </div>

          <div className={'mb-3 form-floating selectVehicleContainer'}>
            <input
              className="dateCar form-control "
              type="date"
              min="1899-01-01"
              name="matriculationDate"
              required
              max={today}
              id="matriculationDate"
              onChange={handleChange}
            />

            <label htmlFor="matriculationDate" className={'editInput form-label'}>
              Matriculation date
            </label>
          </div>

          <div className={'mb-3 form-floating selectVehicleContainer'}>
            <input
              className=" form-control "
              type="file"
              name="vehiclePhoto"
              accept="image/png, image/gif, image/jpeg"
              required
              id="inputFile1"
              onChange={handleInputChange}
              style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}
            />
          </div>

          <button type="submit" id="buttonForm" className="submitVehicleButtonForm">
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
