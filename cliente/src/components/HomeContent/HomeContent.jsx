import React from 'react';
import style from './style.css';
const HomeContent = () => {
  return (
    <div className="home-container">
      <div className="card">
        <div className="box">
          <div className="content">
            <h2>01</h2>
            <h3>Search</h3>
            <p>Search among hundreds of places in your area the one that best suits your vehicle</p>
            <a href="search">Look at it!</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="box">
          <div className="content">
            <h2>02</h2>
            <h3>Your cars</h3>
            <p>
              Add your vehicles so that the owner can make sure that it is you who parks in his
              space
            </p>
            <a href="/mycars">Look at it!</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="box">
          <div className="content">
            <h2>03</h2>
            <h3>Rent your unused places</h3>
            <p>Publish the places that you do not use and get benefit from it</p>
            <a href="places">Look at it!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
