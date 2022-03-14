import React from 'react';
import Styled from 'styled-components';
import Input from '../components/Input';
import SideMenu from '../components/sideMenu/SideMenu';

const FormContainer = Styled.div`
  margin-left:50%;
  width: 50px;
  
`;
const Registro = () => {
  return (
    <div>
      <SideMenu />
      <FormContainer>
        <Input type="text" label="hola" id="prueba" name="prueba"></Input>
      </FormContainer>
    </div>
  );
};

export default Registro;
