import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Select = props => {
  return (
    <div className="d-flex">
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
    </div>
  );
};

export default Select;
