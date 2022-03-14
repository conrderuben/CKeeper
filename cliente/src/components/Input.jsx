import React from 'react';
import { validator } from '../formValidator';

const validation = (e, exp) => {
  validator(exp, e.target);
};

const Input = props => {
  return (
    <div className="mb-3 form-floating">
      <input
        onKeyUp={e => validation(e, props.exp)}
        onChange={e => {
          props.handleChange(e);
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

export default Input;
