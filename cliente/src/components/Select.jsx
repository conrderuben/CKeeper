import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { validator } from '../formValidator';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
const style = {
  height: '80%'
};

const SelectContainer = styled.div`
  height: 100%;

`;


const Select = props => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getData() {
      const city = await axios
        .get(`http://localhost:4000/api/list-cities`)
        .then(x => {
          setCities(x.data);
        });
    }
        getData();
      },

       []);
  return (
    <>
    <select name='cities'
    className="form-control "
    style={style}
    >
       {cities.map((cit) =>
        <option
        
        value={cit.id} key={cit.id}>{cit.nombre} 
                  
        </option> 
      )}
       </select>
     
     </>
       
  );
};

export default Select;
