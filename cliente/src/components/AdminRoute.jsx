import { React, useEffect, useState } from 'react';
import NoAuthPage from './NoAuthPage';
import { httpClient } from '../utils/httpClient';

const AdminRoute = ({ children }) => {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    async function getData() {
      await httpClient.get(` /isAdmin`).then(x => {
        setAdmin(x.data.isAdmin);
      });
    }
    getData();
  }, []);

  return admin ? children : <NoAuthPage />;
};

export default AdminRoute;
