import React from "react";
import styled from "styled-components"

const NavBar=()=>{
    const Contenedor = styled.div`
    height: 45px ;
    width: 100vw;
    position:fixed ;
    z-index:1 ;    
    
    `;

    const Wrapper = styled.div`
    padding: 10px 20px ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    font-weight: bold ;
    //background-color: #d1e3fa94 ;
    background-color: #ffffff94 ;

  
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

    const Item = styled.a`
      
      margin-left: 5px ;
      display: flex ;
      align-items: center ;
      border-radius: 15px ;
      padding:2px 10px;
      height: 20px ;
      cursor: pointer ;
      text-decoration: none ;
      font-style: none ;
      color:black;

  &:hover{
    background-color: #f9fdff6c;
    text-decoration: underline ;
  
  }

  
     
    `;

    const Boton = styled.button`
      margin-left: 5px ;
      margin-right: 5px ;
      border: 1px solid black ;
      border-radius: 15px;
      background-color: #5e9bf8 ;
      font-weight: bold ;
      padding:2px 10px;
      height: 22px ;
      line-height: 100% ;
      cursor:pointer;

     
    `;

    
   
    
    
    return (
      <Contenedor>
        <Wrapper>
          <Izq>LOGO</Izq>
          <Cen>CKEEPER</Cen>
          <Der>
            <Menu>
              <Item href="#home">Home</Item>
              <Item href="#sobre-nosotros">Sobre Nosotros</Item>
              <Item>Contacto</Item>
              <Item href="/registro">Registrarse</Item>
              <Boton>Iniciar Sesion</Boton>
              
            </Menu>
          </Der>


        </Wrapper>
      </Contenedor>
      
    );
    
}

export default NavBar;