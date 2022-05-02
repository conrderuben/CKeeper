import React, { useEffect, useState } from 'react';

import { httpClient } from '../utils/httpClient';

const AdminUsers = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      await httpClient.get(`http://localhost:4000/api/getAllUsers`).then(x => setListUsers(x.data));
    }

    getData();
  }, []);

  return (
    <>
      <th>Usuario</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>fecha Nacimiento</th>
      <th>correo</th>
      <th>telefono</th>
      {listUsers.map(value => {
        return (
          <tr>
            <td>{value.usuario}</td>
            <td>{value.nombre}</td>
            <td>{value.apellido}</td>
            <td>{value.fechaNacimiento}</td>
            <td>{value.correo}</td>
            <td>{value.telefono}</td>
          </tr>
        );
      })}
    </>
  );
};

export default AdminUsers;
