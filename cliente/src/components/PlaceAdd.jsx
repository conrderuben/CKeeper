import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1120px;
  border: 1px solid white;
  height: 300px;
  margin: auto;
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

export const PlaceAdd = props => {
  const navigate = useNavigate();
  const handleCarAdd = () => {
    navigate('/parking');
  };
  return <Container onClick={handleCarAdd}>+</Container>;
};
