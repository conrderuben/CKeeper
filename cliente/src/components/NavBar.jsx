import React from 'react';
import styled from 'styled-components';
import Button from './PrimaryButton';
import ckeeper from '../assets/Ckeeper.svg';
import PrimaryButton from './PrimaryButton';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    @media only screen and (min-width: 851px) {
      .checkbtn {
        font-size: 22px;
        float: right;
        line-height: 80px;
        margin-right: 40px;
        cursor: pointer;
        display: none;
      }
      #check {
        display: none;
      }
      #logo{
        overflow:hidden;
      }
    }
    @media only screen and (max-width: 850px) {
      .checkbtn {
        display: block;
        font-size: 22px;
      }
      .menu {
        position: fixed;
        background: #ffffff94;
        padding: 0 30px;
        justify-content: space-between;
        font-family: 'Quicksand', sans-serif;
        top: -100%;
        left: 0;
        text-align: center;
        transition: 0.5s;
      }
      .menu a {
        display: block;
        margin-top: 15px;
        margin-bottom: 10px;
        line-height: 25px;
        color: inherit;
      }
      .menu a {
        font-size: 14px;
      }
      a:hover,
      a.active {
        background: none;
      }
      #check:checked ~ .menu {
        top: 59px;
        width: 100%;
      }
      #check {
        display: none;
      }
    }
  `;

  const Izq = styled.div`
    flex: 1;
    margin: 0px;
    height: 40px;
    display: flex;
    align-items: center;
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
    transition: 0.5s;

    &:hover {
      background-color: #f9fdff6c;
      transition: 0.5s;
    }
  `;
  const navigate = useNavigate();
  return (
    <Contenedor>
      <Wrapper>
        <Izq>
          <a href="/#home">
            <img id="logo" src={ckeeper} width="140" height="120" />
          </a>
        </Izq>
        <Cen>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <FontAwesomeIcon icon={faBars} id="icono" />
          </label>
          <Menu className="menu">
            <Item href="/#home">Home</Item>
            <Item href="/#sobre-nosotros">About&nbsp;us</Item>
            <Item href="/contact">Contact&nbsp;us</Item>
            <Item href="/register">Register</Item>
          </Menu>
        </Cen>
        <Der>
        <a href="/login"><PrimaryButton>Login</PrimaryButton></a>
        </Der>
      </Wrapper>
    </Contenedor>
  );
};

export default NavBar;
