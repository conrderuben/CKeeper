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
  overflow-y: scroll;
  
`;

const BillPage = () => {
  const [bills, setBills] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    async function getData() {
      const invoices = await httpClient.get(`/get-bill-data`).then(x => {
        setBills(x.data.data);
        setUserId(x.data.userId);
        console.log(x.data.data);
      });
    }

    getData();
  }, []);
  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        {bills.map(bill => (
          <Invoice
            key={bill.billId}
            id={bill.billId}
            amount={bill.amount}
            issueDate={bill.issueDate}
            title={bill.description}
            startDate={bill.startDate}
            endDate={bill.endDate}
            prize={bill.prize}
            renter={bill.renter}
            tenant={bill.tenant}
            renterId={bill.renterId}
            tenantId={bill.tenantId}
            long={bill.long}
            width={bill.width}
            height={bill.height}
            type={bill.type}
            userId={userId}
          />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default BillPage;
