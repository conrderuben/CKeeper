import { React, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NoAuthPage from './NoAuthPage';
import { httpClient } from '../utils/httpClient';

const AdminRoute = ({ children }) => {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    async function getData() {
      await httpClient.get(`http://localhost:4000/api/isAdmin`).then(x => {
        setAdmin(x.data.isAdmin);
      });
    }
    getData();
  }, []);

  return admin ? children : <NoAuthPage />;
};

export default AdminRoute;
