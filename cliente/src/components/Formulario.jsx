import React, { useState } from 'react';
import styled from 'styled-components';
import fondo2 from '../assets/img/fondo2.jpg';
import fondo1 from '../assets/img/fondo1.jpg';
import fondo3 from '../assets/img/fondo3.jpg';
import fondo4 from '../assets/img/fondo4.jpg';
import fondo5 from '../assets/img/fondo5.jpg';
import validador from '../validadorFormulario';

import Axios from 'axios';
import { httpClient } from '../utils/httpClient';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const ImagenContainer = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
`;
const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescripcionContainer = styled.div`
  width: 32vw;
  /* background-color: #ffffff; */
  position: relative;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 10vh;
  margin-bottom: 7vh;
  padding: 15px;
`;

const Titulo = styled.h1`
  font-size: 60px;
  position: absolute;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
`;

const Descripcion = styled.div`
  position: absolute;
  top: 140px;
`;

const Form = styled.div`
  width: 30vw;
`;

const manejar = (e, exp) => {
  validador(exp, e.target);
};

const Formulario = () => {
  const navigate = useNavigate();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const [form, setForm] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    httpClient.post('/registro', { form }).then(() => {
      navigate('/login');
    });
  };

  return (
    <Container>
      <ImagenContainer>
        <a name="sobre-nosotros"></a>
        <Imagen src={fondo3} />
      </ImagenContainer>
      <DescripcionContainer>
        <Titulo>Registrate</Titulo>
        <Descripcion>
          <Form>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-floating">
                <input
                  onKeyUp={e => manejar(e, /^[A-Za-z0-9_\.-]{8,20}$/)}
                  onChange={handleChange}
                  type="text"
                  className="form-control "
                  name="usuario"
                  id="usuario"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="usuario" className="form-label">
                  Usuario
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Incorrecto</div>
              </div>

              <div className="form-floating mb-3">
                <input
                  onKeyUp={e => manejar(e, /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/)}
                  onChange={handleChange}
                  type="password"
                  className="form-control "
                  name="contrasena"
                  id="password"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Incorrecto</div>
              </div>

              <div className="form-floating mb-3">
                <input
                  onKeyUp={e =>
                    manejar(
                      e,
                      /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{2}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,17}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/
                    )
                  }
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="name@example.com"
                />
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Incorrecto</div>
              </div>

              <div className="form-floating mb-3">
                <input
                  onKeyUp={e => manejar(e, /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{3,20}$/)}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="apellido"
                  id="apellido"
                  placeholder="name@example.com"
                />
                <label htmlFor="apellido" className="form-label">
                  Apellidos
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Incorrecto</div>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="date"
                  className="form-control"
                  name="fecha"
                  id="fecha"
                  placeholder="name@example.com"
                />
                <label htmlFor="fecha">Fecha de Nacimiento</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onKeyUp={e =>
                    manejar(
                      e,
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                    )
                  }
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  name="correo"
                  id="correo"
                  placeholder="name@example.com"
                />
                <label htmlFor="correo" className="form-label">
                  Email
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Incorrecto</div>
              </div>

              <div className="form-floating mb-3">
                <input
                  onKeyUp={e => manejar(e, /^[6-9]\d\d{3}\d{2}\d{2}$/)}
                  onChange={handleChange}
                  type="tel"
                  className="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="name@example.com"
                />
                <label htmlFor="telefono" className="form-label">
                  Telefono
                </label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Incorrecto</div>
              </div>

              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </Form>
        </Descripcion>
      </DescripcionContainer>
    </Container>
  );
};

export default Formulario;
