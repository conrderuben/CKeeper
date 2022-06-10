import { React, useEffect, useState } from 'react';
import Styled from 'styled-components';
import SideMenu from '../components/sideMenu/SideMenu';
import Invoice from '../components/Invoice/Invoice.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { httpClient } from '../utils/httpClient';
const Container = Styled.div`
  display: flex;
  background: #110f16;
  height:100%;
  margin: auto;
`;

const ContentContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const BillPage = () => {
  const [bills, setBills] = useState({});

  useEffect(() => {
    async function getData() {
      const invoices = await httpClient.get(`/get-bill-data`).then(x => x.data);
      console.log(invoices);
    }

    getData();
  }, []);
  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        <Invoice />
        <Invoice />
        <Invoice />
      </ContentContainer>
    </Container>
  );
};

export default BillPage;
