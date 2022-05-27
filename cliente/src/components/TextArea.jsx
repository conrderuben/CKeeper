import React from 'react';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

const validation = (e, exp) => {
  validator(exp, e.target);
};


const TextArea = props => {
  return (
    
     
      <textarea
        //  onKeyUp={e => validation(e, props.exp)}
         
        
        className="form-control "
        name={props.name}
        cols={props.cols}
        rows={props.rows}
        id={props.id}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={(e) => {props.onChange(e);}}
      />
      
   
  );
};

export default TextArea;
