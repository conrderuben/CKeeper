import React from "react";
import styled from "styled-components"

const NavBar=()=>{
    const Contenedor = styled.div`
    height: 60px ;
    width: 100vw;
    
    `;

    const Wrapper = styled.div`
    padding: 10px 30px ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    `;

    const Izq = styled.div`
      flex:1;
      justify-content: flex-start ;
    `;

    const Cen = styled.div`
      flex:1;
      text-align: center ;
    `;

    const Der = styled.div`
      flex:1;
      text-align: right ;
     
    `;

    const Menu = styled.div`

      display: flex;
      justify-content: flex-end ;
      
    `;

    const Item = styled.div`
      margin-left: 15px ;
      display: flex ;
      align-items: center ;
      border-radius: 15px ;
      padding:2px;
      height: 30px ;

  &:hover{
    background-color: grey;
    opacity: 0.5 ;
  }
     
    `;

    const Boton = styled.button`
      border: 1px solid black ;
      border-radius: 15px;
      background-color: #5292f1 ;
      height: 30px ;
      color:white;
      font-size: bold ;

     
    `;

    
   
    
    
    return (
      <Contenedor>
        <Wrapper>
          <Izq>LOGO</Izq>
          <Cen>CKEEPER</Cen>
          <Der>
            <Menu>
              <Item>Home</Item>
              <Item>Contacto</Item>
              <Item>Registrarse</Item>
              <Item><Boton>Iniciar Sesion</Boton></Item>
              <Item></Item>
            </Menu>
          </Der>


        </Wrapper>
      </Contenedor>
      
    );
    
}

export default NavBar;