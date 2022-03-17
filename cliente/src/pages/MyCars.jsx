import React from 'react'
import styled from 'styled-components';
import SideMenu from '../components/sideMenu/SideMenu'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AddButton = styled.button`
    width: 80px;
    border-radius: 15px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 85%;
    margin: auto;
    margin-right: 0;
    margin-top: 20px;
`;
const Card = styled.div`
margin: 10px 10px;
    border-radius: 15px;
    border: 2px solid black;
    height: 300px;
    width: 300px;
    box-shadow: 4px 4px 5px 0px;
    
`;

export const MyCars = () => {
  return (
      <>
    <SideMenu></SideMenu>
      <Container>
      <AddButton>+Add Car</AddButton>
      <CardContainer>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    </CardContainer>
    </Container>
    </>

  )
}

