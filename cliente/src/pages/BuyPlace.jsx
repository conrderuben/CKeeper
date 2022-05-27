import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import SideMenu from '../components/sideMenu/SideMenu';
import { httpClient } from '../utils/httpClient';
import { useLocation } from 'react-router-dom';
import Step from '../components/Steps/Step';
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
`;

const BuyPlace = () => {
  const [actualPlace, setActualPlace] = useState();
  const location = useLocation();
  const [minDate, setMinDate] = useState();
  const params = location.state;
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

  const photos = () => {
    var array = [];
    for (let i = 0; i < 3; i++) {
      array.push(
        <div
          className={i == 0 ? ' carousel-item active' : 'carousel-item'}
          style={{ maxHeight: '300px' }}
        >
          <img
            src={require(`../../../assets/users/Ruben/Parking/parking${i + 1}.jpg`)}
            className="d-block w-100"
            alt="..."
          />
        </div>
      );
    }
    return array;
  };

  return (
    <Container className="dark">
      <SideMenu />
      <Content>
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
                    name="matriculationDate"
                    id="matriculationDate"
                    label="Matriculation date"
                    onChange={e => {
                      setMinDate(e.target.value);
                    }}
                  />
                  A
                  <input
                    className="date"
                    type="date"
                    min={minDate}
                    name="matriculationDate"
                    id="matriculationDate"
                    label="Matriculation date"
                  />
                </DateContainer>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-white">
                    {params.prize}€
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Buy
                  </button>
                </div>
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
