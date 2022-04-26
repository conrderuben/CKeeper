import { React, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NoAuthPage from './NoAuthPage';
import { httpClient } from '../utils/httpClient';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    async function getData() {
      await httpClient.get(`http://localhost:4000/api/isAuth`).then(x => {
        setAuth(x.data.isAuth);
      });
    }
    getData();
  }, []);

  return auth ? children : <NoAuthPage />;
};

export default ProtectedRoute;
