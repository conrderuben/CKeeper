import React from 'react';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';




const Input = props => {
  return (
    <div className="mb-3 form-floating">
      <input
        
        type={props.type}
        className="form-control"
        name={props.name}
        id={props.id}
        placeholder="name@example.com"
        required
        onChange={e => {
          props.onChange(e);
        }}
      />
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
    </div>
  );
};

export default Input;