import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px 10px;
  border-radius: 15px;
  border: 2px solid black;
  height: 300px;
  width: 300px;
  box-shadow: 4px 4px 5px 0px;
  font-size: 90px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const CardAdd = () => {
  return <Container>+</Container>;
};
