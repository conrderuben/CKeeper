import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 850px) {
    #form select {
      width: 53vw !important;
    }
    #content {
      height: 30vh;
      justify-content: flex-start !important;
      flex-wrap: wrap;
    }
  }
`;

const Filters = props => {
  return (
    <Container>
      <div id="content" className="d-flex justify-content-center">
        <div id="form" className="form-floating d-flex ml-7">
          <select
            className="form-select "
            id="floatingSelectGrid"
            aria-label="Floating label select example"
            name="select"
            onChange={e => {
              props.onChangeCity(e);
            }}
          >
            <option value="" defaultValue>
              Select one
            </option>
            {props.data.map(element => (
              <option value={element.name} key={element.id}>
                {element.name}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelectGrid">City</label>
        </div>
        <div id="form" className="form-floating d-flex ml-7">
          <input
            type="email"
            className="form-control"
            id="floatingInputValue"
            placeholder="Search"
            onChange={e => {
              props.onChangeUser(e);
            }}
          />
          <label htmlFor="floatingInputValue">User</label>
        </div>
        <div className="form-floating d-flex ml-7">
          <select
            className="form-select"
            id="floatingSelectGrid"
            aria-label="Floating label select example"
            name="select"
            onChange={e => {
              props.onChangePrize(e);
            }}
          >
            <option value="0">Without filter</option>
            <option value=">">From lower to highest</option>
            <option value="<">From highest to lower</option>
          </select>
          <label htmlFor="floatingSelectGrid">Prize</label>
        </div>
      </div>
    </Container>
  );
};

export default Filters;
