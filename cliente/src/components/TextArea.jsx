import React from 'react';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validation = (e, exp) => {
  validator(exp, e.target);
};

const TextArea = props => {
  return (
    <div
      className={
        props.divClass != undefined ? 'mb-3 form-floating ' + props.divClass : 'mb-3 form-floating'
      }
    >
      <textarea
        className={
          props.className != undefined ? 'form-control ' + props.className : 'form-control'
        }
        name={props.name}
        cols={props.cols}
        rows={props.rows}
        id={props.id}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onKeyUp={e => validation(e, props.exp)}
        onChange={e => {
          props.onChange(e);
        }}
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

export default TextArea;
