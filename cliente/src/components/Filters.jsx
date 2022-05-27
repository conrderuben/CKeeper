import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filters = props => {
  return (
    <div className="d-flex justify-content-center">
      <div class="form-floating d-flex ml-7">
        <select
          class="form-select "
          id="floatingSelectGrid"
          aria-label="Floating label select example"
          name="select"
          onChange={e => {
            props.onChangeCity(e);
          }}
        >
          <option value="" selected>
            Select one
          </option>
          {props.data.map(element => (
            <option value={element.name} key={element.id}>
              {element.name}
            </option>
          ))}
        </select>
        <label for="floatingSelectGrid">City</label>
      </div>
      <div class="form-floating d-flex ml-7">
        <input
          type="email"
          class="form-control"
          id="floatingInputValue"
          placeholder="Search"
          onChange={e => {
            props.onChangeUser(e);
          }}
        />
        <label for="floatingInputValue">User</label>
      </div>
      <div class="form-floating d-flex ml-7">
        <select
          class="form-select"
          id="floatingSelectGrid"
          aria-label="Floating label select example"
          name="select"
          onChange={e => {
            props.onChangePrize(e);
          }}
        >
          <option value="0">Without filter</option>
          <option value=">">From lower to highest</option>
          <option value="<">From highest to lower</option>
        </select>
        <label for="floatingSelectGrid">Prize</label>
      </div>
    </div>
  );
};

export default Filters;
