import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 270px;
  height: 450px;
  margin: 10px;
  border-radius: 15px;
  font-size: 90px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;

    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.7s ease;
  }
`;

export const CardAdd = props => {
  const navigate = useNavigate();
  const handleCarAdd = () => {
    navigate('/add-car');
  };
  return <Container onClick={handleCarAdd}>+</Container>;
};
