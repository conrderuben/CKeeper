import React from 'react';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validation = (e, exp) => {
  validator(exp, e.target);
};

const Input = props => {
  return (
    <div
      className={
        props.divClass != undefined ? 'mb-3 form-floating ' + props.divClass : 'mb-3 form-floating'
      }
    >
      <input
        onKeyUp={e => validation(e, props.exp)}
        onChange={e => {
          props.onChange(e);
        }}
        type={props.type}
        className={
          props.className != undefined ? 'form-control ' + props.className : 'form-control'
        }
        name={props.name}
        id={props.id}
        placeholder="name@example.com"
        required
        value={props.value}
      />
      <label
        htmlFor={props.id}
        className={props.className != undefined ? 'form-label ' + props.className : 'form-label'}
      >
        {props.label}
      </label>
      <div className="valid-feedback" id="validacionText">
        Looks good!
      </div>
      <div className="invalid-feedback" id="validacionText">
        Incorrect
      </div>
    </div>
  );
};

export default Input;
