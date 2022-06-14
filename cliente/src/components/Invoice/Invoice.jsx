import React, { useState } from 'react';
import { httpClient } from '../../utils/httpClient';
import { ViewCar } from '../../components/ViewCar.jsx';
import style from './style.css';

const Invoice = props => {
  const [cars, setCars] = useState([]);
  const style = {
    height: '2px'
  };
  var days = 0;
  const getDays = () => {
    const d1 = new Date(props.startDate);
    const d2 = new Date(props.endDate);

    var difference = d2.getTime() - d1.getTime();
    days = Math.ceil(difference / (1000 * 3600 * 24));
  };
  getDays();

  const viewCars = async user => {
    const vehicles = await httpClient.get(`/view-cars/${user}`).then(x => x.data);

    let vehiclesWB = Promise.all(
      vehicles.map(vehicle => {
        return httpClient.get(`/get-brand-by-id/${vehicle.typeId}`).then(data => {
          const obj = {
            id: vehicle.id,
            type: vehicle.type,
            matriculationDate: vehicle.matriculationDate,
            brand: data.data.brand,
            model: data.data.model
          };
          return obj;
        });
      })
    ).then(x => {
      console.log(cars);
      setCars(x);
    });
  };

  return (
    <div id="invoice" className=" p-10 mx-10 mt-10 bg-white rounded-lg fit-content ">
      <h2 className="mb-10 text-xl tracking-widest uppercase">
        {props.renterId == props.userId ? props.tenant : props.renter}
      </h2>
      <span className="ml-2 font-mono text-base text-gray-400">#{props.id}</span>
      <span className="block w-16 mt-4 bg-blue-500" style={style}></span>

      <div className="mb-6">
        <div>{props.title}</div>
        <div className="mt-2 text-sm text-gray-400 uppercase">
          issue: {props.issueDate.split('T')[0]}
        </div>
        <div className="mt-2 text-sm text-gray-400 uppercase">
          Sizes: {props.long} x {props.width} x {props.height}
        </div>
        <div className="mt-2 text-sm text-gray-400 uppercase">
          Dates: {props.startDate.split('T')[0]} - {props.endDate.split('T')[0]}
        </div>
        <div className="mt-2 text-sm text-gray-400 uppercase">
          {props.type}: {props.prize}€
        </div>
        <div className="mt-2 text-sm text-gray-400 uppercase d-flex justify-content-between">
          {days} days x {props.prize}€
          <span className={props.renterId == props.userId ? 'text-green-400' : 'text-red-400'}>
            {props.renterId == props.userId ? '+' : '-'}${props.amount}
          </span>
        </div>
      </div>

      <div className="flex justify-between pt-8 text-lg border-t border-gray-200">
        {props.renterId == props.userId ? (
          <button
            onClick={() => viewCars(props.tenantId)}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="px-12 tracking-widest text-white uppercase bg-blue-600 rounded hover:bg-blue-500"
          >
            View Cars
          </button>
        ) : (
          <div></div>
        )}
        {/* MODAL  */}
        <div id="modal-container">
          <div
            className="modal fade billsModal"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    {props.tenant} Cars
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex flex-wrap justify-content-center">
                  {cars.map(car => (
                    <ViewCar
                      key={car.id}
                      id={car.id}
                      type={car.type}
                      date={car.matriculationDate}
                      brand={car.brand}
                      model={car.model}
                    ></ViewCar>
                  ))}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="uppercase">Total</div>
          <span
            className={props.renterId == props.userId ? 'text-green-400 ml-5' : 'text-red-400 ml-5'}
          >
            ${props.amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
