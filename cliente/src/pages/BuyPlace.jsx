import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import SideMenu from '../components/sideMenu/SideMenu';
import { httpClient } from '../utils/httpClient';
import { useNavigate, useLocation } from 'react-router-dom';
import Step from '../components/Steps/Step';
import e from 'cors';
const Container = styled.div`
  display: flex;
  background-color: #b5e5f8;
  height: 100%;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  margin-right: 0;
  overflow-y: scroll;
  width: 100%;
  flex: 1;
`;

const BuyPlace = () => {
  const [msg, setMsg] = useState('');
  const [actualPlace, setActualPlace] = useState();
  const [form, setForm] = useState({});
  const location = useLocation();
  const [minDate, setMinDate] = useState();
  const params = location.state;
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
  const handleBuy = () => {
    async function createRent() {
      const user = await httpClient.get('user').then(x => x.data);

      const rent = await httpClient.post(`/create-rent`, { form, place: params, user }).then(x => {
        setMsg(x.data.msg);
        navigate('/bills');
      });
    }
    if (form.date1 == undefined || form.date2 == undefined) {
      if (form.date1 == undefined) {
        document.getElementById('date1').style.border = '1px solid #15f6ff';
      } else if (form.date2 == undefined) {
        document.getElementById('date2').style.border = '1px solid #15f6ff';
      }
    } else {
      createRent();
    }
  };

  const handleChange = e => {
    document.getElementById(e.target.id).style.border = '1px solid rgb(255 1 202)';
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const photos = () => {
    var array = [];
    for (let i = 0; i < params.photo; i++) {
      array.push(
        <div
          className={i == 0 ? ' carousel-item active' : 'carousel-item'}
          style={{ maxHeight: '300px' }}
        >
          <img
            src={require(`../assets/users/${params.idUser}/Parking${params.placeId}/parking${
              i + 1
            }.png`)}
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: 'inherit' }}
          />
        </div>
      );
    }
    return array;
  };

  return (
    <Container>
      <SideMenu />
      <Content className="dark">
        <section className="text-gray-400 dark body-font h-100">
          <div className="container mx-auto py-14 mx-auto">
            <div className="lg:w-7/8 mx-auto rounded flex flex-wrap p-3">
              <div className="w-1/2 p-3 ">
                <div
                  id="carouselExampleControls"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner rounded">{photos()}</div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{params.user}</h2>
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  {params.street}, {params.number} ({params.pc})
                </h1>
                <p className="leading-relaxed">{params.desc}</p>
                <DateContainer>
                  De
                  <input
                    className="date"
                    type="date"
                    min={today}
                    name="date1"
                    id="date1"
                    label="Matriculation date"
                    onChange={e => {
                      setMinDate(e.target.value);
                      handleChange(e);
                    }}
                  />
                  A
                  <input
                    className="date"
                    type="date"
                    min={minDate}
                    name="date2"
                    id="date2"
                    label="Matriculation date"
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                </DateContainer>
                <div className="flex mb-3">
                  <span className="title-font font-medium text-2xl text-white">
                    {params.prize}€/dia
                  </span>
                  <button
                    onClick={e => handleBuy()}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Buy
                  </button>
                </div>
                {msg != '' && (
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {msg}
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Step />
        </section>
      </Content>
    </Container>
  );
};

export default BuyPlace;
