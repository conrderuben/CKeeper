import React from 'react';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const validation = (e, exp) => {
  validator(exp, e.target);
};

const InputValidated = props => {
  return (
    <div className="mb-3 form-floating">
      <input
        onKeyUp={e => validation(e, props.exp)}
        onChange={e => {
          props.onChange(e);
        }}
        type={props.type}
        className="form-control "
        name={props.name}
        id={props.id}
        placeholder="name@example.com"
        required
      />
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">Incorrecto</div>
    </div>
  );
};

export default InputValidated;