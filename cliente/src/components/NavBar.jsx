import React from 'react';
import styled from 'styled-components';
import Button from './PrimaryButton';
import logo from '../assets/img/Logo.png';

const NavBar = () => {
  const Contenedor = styled.div`
    height: 45px;
    width: 100vw;
    position: fixed;
    z-index: 1;
  `;

  const Wrapper = styled.div`
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    //background-color: #d1e3fa94 ;
    background-color: #ffffff94;
  `;

  const Izq = styled.div`
    flex: 1;
    margin: 0px;
  `;

  const Cen = styled.div`
    flex: 1;
    text-align: center;
  `;

  const Der = styled.div`
    flex: 1;
    text-align: right;
  `;

  const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const Item = styled.a`
    margin-left: 5px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding: 2px 10px;
    height: 20px;
    cursor: pointer;
    color: inherit;
    text-decoration: none;

    &:hover {
      background-color: #f9fdff6c;
      text-decoration: underline;
    }
  `;

  const Boton = styled.button`
    margin-left: 5px;
    margin-right: 5px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: #5e9bf8;
    font-weight: bold;
    padding: 2px 10px;
    height: 22px;
    line-height: 100%;
    cursor: pointer;
  `;

  return (
    <Contenedor>
      <Wrapper>
        <Izq>
          <img src={logo} width="40" height="40" />
        </Izq>
        <Cen>
          <Menu>
            <Item href="/#home">Home</Item>
            <Item href="/#sobre-nosotros">About us</Item>
            <Item>Contacto</Item>
            <Item href="/registro">Registrarse</Item>
            {/* <Boton>Login</Boton> */}
            {/* <BotonSesion
              onClick={e => {
                window.location.href = '/login';
              }}
            /> */}
          </Menu>
        </Cen>
        <Der>
          <Button
            onClick={e => {
              window.location.href = '/login';
            }}
          >
            Iniciar Sesion
          </Button>
        </Der>
      </Wrapper>
    </Contenedor>
  );
};

export default NavBar;
