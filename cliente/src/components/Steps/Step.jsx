import React from 'react';
import style from './style.css';

const Step = () => {
  return (
    <>
      <div className="cont">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src="http://assets.stickpng.com/thumbs/585e4adacb11b227491c3392.png" />
              <h3>Choose</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste
                veritatis provident at.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src="https://www.freeiconspng.com/thumbs/payment-icon/cash-payment-icon-5.png" />
              <h3>Pay</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste
                veritatis provident at.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src="https://www.pngmart.com/files/10/Parking-PNG-Photos.png" />
              <h3>Park</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste
                veritatis provident at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step;
