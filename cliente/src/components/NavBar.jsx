import React from "react";
import styled from "styled-components"
import IniciarSesion from "./IniciarSesion";
import logo from "../assets/img/Logo.png"

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

    const Izq = styled.img`
      height: 40px ;
      margin: 0px ;
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
          <Izq src={logo}/>
          <Cen>CKEEPER</Cen>
          <Der>
            <Menu>
              <Item href="/#home">Home</Item>
              <Item href="/#sobre-nosotros">Sobre Nosotros</Item>
              <Item>Contacto</Item>
              <Item href="/registro">Registrarse</Item>
              {/* <Boton>Iniciar Sesion</Boton> */}
              <IniciarSesion/>
              
            </Menu>
          </Der>


        </Wrapper>
      </Contenedor>
      
    );
    
}

export default NavBar;