import React from 'react';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Input = props => {
  return (
    <div className={props.divClass!=undefined ? "mb-3 form-floating "+ props.divClass : "mb-3 form-floating" }>
      <input
        onChange={e => {
          props.onChange(e);
        }}
        type={props.type}
      className= {props.className!=undefined ? "form-control "+ props.className : "form-control" }
        name={props.name}
        id={props.id}
        placeholder="name@example.com"
        required
        value={props.value}
      />
      <label htmlFor={props.id} className={props.className!=undefined ? "form-label "+ props.className : "form-label" }>
        {props.label}
      </label>
    </div>
  );
};

export default Input;