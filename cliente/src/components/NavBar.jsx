import React from 'react';
import styled from 'styled-components';
import Button from './PrimaryButton';
import logo from '../assets/img/Logo.png';
import ckeeper from '../assets/Ckeeper.svg';
import PrimaryButton from './PrimaryButton';
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
  const Contenedor = styled.div`
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
    background-color: #ffffff94;
  `;

  const Izq = styled.div`
    flex: 1;
    margin: 0px;
    height:40px;
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
    padding: 0 60px;
    justify-content: space-between;
    font-family: 'Quicksand', sans-serif;
  `;

  const Item = styled.a`
    margin-left: 5px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding: 2px 10px;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    transition:0.5s;

    &:hover {
      background-color: #f9fdff6c;
      transition:0.5s;
    }
  `;
  const Image=styled.img`
  position:relative;
  bottom:5em;
  `;
  const navigate = useNavigate();
  return (
    <Contenedor>
      <Wrapper>
        <Izq>
        <a href="/#home"><Image id="logo" src={ckeeper} width="140" height="120" /></a>
        </Izq>
        <Cen>
          <Menu>
            <Item href="/#home">Home</Item>
            <Item href="/#sobre-nosotros">About&nbsp;us</Item>
            <Item href='/contacto'>Contacto</Item>
            <Item href="/registro">Registrarse</Item>
          </Menu>
        </Cen>
        <Der>
          <PrimaryButton>Login</PrimaryButton>
        </Der>
      </Wrapper>
    </Contenedor>
  );
};

export default NavBar;
