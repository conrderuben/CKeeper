import React from 'react';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

const validation = (e, exp) => {
  validator(exp, e.target);
};


const Option = props => {
  return (
    
     
      <option value={props.value}>{props.text} </option>
  );
};

export default Option;
