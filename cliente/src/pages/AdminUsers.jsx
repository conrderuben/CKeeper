import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { httpClient } from '../utils/httpClient';

const handleActive = (value, id) => {
  // httpClient.get(`http://localhost:4000/api/setActive/${id}/${value}`);
  console.log('hola');
};

const AdminUsers = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      await httpClient.get(`http://localhost:4000/api/getAllUsers`).then(x => setListUsers(x.data));
    }

    getData();
  }, []);

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">fecha Nacimiento</th>
            <th scope="col">correo</th>
            <th scope="col">telefono</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((value, index) => {
            return (
              <tr key={index} className={value.active ? 'table-success' : 'table-danger'}>
                <td>{value.user}</td>
                <td>{value.name}</td>
                <td>{value.surname}</td>
                <td>{value.bornDate}</td>
                <td>{value.mail}</td>
                <td>{value.phone}</td>
                <td>
                  <button
                    onClick={() =>
                      httpClient
                        .get(
                          `http://localhost:4000/api/setActive/${value.id}/${
                            value.active ? '0' : '1'
                          }`
                        )
                        .then(window.location.reload())
                    }
                  >
                    {value.active ? 'desactive' : 'active'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
