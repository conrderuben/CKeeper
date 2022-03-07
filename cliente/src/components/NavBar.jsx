import React from "react";
import styled from "styled-components"

const NavBar=()=>{
    const MyH3 = styled.div`
    color: red;
    margin-left: 20px;
    background-color: black;
    `;
    
    return (
    <>
      <h2>Componentes Estilo</h2>
      <MyH3>Hola soy un H3 Con componentes con Estilo</MyH3>
    </>
    );
    
}

export default NavBar;