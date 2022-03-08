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
    `;

    
   
    
    
    return (
      <Contenedor>
        <Wrapper>
          <Izq>Izq</Izq>
          <Cen>Centro</Cen>
          <Der>
            <Menu>
              <Item>Home</Item>
              <Item>Contacto</Item>
              <Item>Iniciar Sesion</Item>
            </Menu>
          </Der>


        </Wrapper>
      </Contenedor>
      
    );
    
}

export default NavBar;