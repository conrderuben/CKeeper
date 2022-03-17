import React from 'react'
import styled from 'styled-components';
import SideMenu from '../components/sideMenu/SideMenu'


const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    flex:1;
    margin: 0 auto;
`;

const AddButton = styled.button`
    width: 80px;
    border-radius: 15px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 85%;
    position: absolute;
    margin-right: 15px;
    margin-top: 40px;
    
`;
const Card = styled.div`
margin: 10px 10px;
    border-radius: 15px;
    border: 2px solid black;
    height: 300px;
    width: 300px;
    box-shadow: 4px 4px 5px 0px;
    
    
`;
const Container=styled.div`
width:100vw;
display:flex;
background-color: #CCCCFF;
`;

export const MyCars = () => {
  return (
      <Container>
    <SideMenu/>
      <ContentContainer>
      <AddButton>+Add Car</AddButton>
      <CardContainer>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    <Card>CarCard</Card>
    </CardContainer>
    </ContentContainer>
    </Container>

  )
}

