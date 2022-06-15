import { React, useEffect, useState } from 'react';
import NoAuthPage from './NoAuthPage';
import { httpClient } from '../utils/httpClient';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    async function getData() {
      await httpClient.get(` /isAuth`).then(x => {
        setAuth(x.data.isAuth);
      });
    }
    getData();
  }, []);

  return auth ? children : <NoAuthPage />;
};

export default ProtectedRoute;
