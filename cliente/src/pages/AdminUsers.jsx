import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { httpClient } from '../utils/httpClient';
import SideMenu from '../components/sideMenu/SideMenu';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #b5e5f8;
  height: 100%;
`;

const Content = styled.div`
  margin-right: 0;
  flex: 1;
  overflow-y: scroll;
`;

const handleActive = (value, id) => {
  // httpClient.get(`http://localhost:4000/api/setActive/${id}/${value}`);
  console.log('hola');
};

const AdminUsers = () => {
  const [listUsers, setListUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getData() {
      await httpClient.get(`http://localhost:4000/api/getAllUsers`).then(x => setListUsers(x.data));
    }

    getData();
  }, []);

  return (
    <Container>
      <SideMenu />
      <Content className=" py-4 ">
        <div className="container">
          <input
            type="text"
            className="search"
            placeholder="Search"
            onChange={event => {
              setSearchTerm(event.target.value);
            }}
          />
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
              {listUsers
                .filter(val => {
                  if (searchTerm == '') {
                    return val;
                  } else if (val.user.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val;
                  }
                })
                .map((value, index) => {
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
                          onClick={() => {
                            console.log('hola');
                            httpClient
                              .get(
                                `http://localhost:4000/api/setActive/${value.id}/${
                                  value.active ? '0' : '1'
                                }`
                              )
                              .then(window.location.reload());
                          }}
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
      </Content>
    </Container>
  );
};

export default AdminUsers;
