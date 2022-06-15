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

const AdminUsers = () => {
  const [listUsers, setListUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getData() {
      await httpClient.get(` /getAllUsers`).then(x => setListUsers(x.data));
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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Born Date</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
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
                  if (value.user === 'Admin123') {
                    return '';
                  } else {
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
                              httpClient
                                .get(` /setActive/${value.id}/${value.active ? '0' : '1'}`)
                                .then(window.location.reload());
                            }}
                          >
                            {value.active ? 'disable' : 'enable'}
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
      </Content>
    </Container>
  );
};

export default AdminUsers;
