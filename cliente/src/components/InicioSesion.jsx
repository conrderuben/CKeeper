import React, { useState } from 'react'
import styled from 'styled-components'
import fondo2 from "../assets/img/fondo2.jpg"
import fondo1 from "../assets/img/fondo1.jpg"
import fondo3 from "../assets/img/fondo3.jpg"
import fondo4 from "../assets/img/fondo4.jpg"
import fondo5 from "../assets/img/fondo5.jpg"
import validador from '../validadorFormulario'

import Axios from "axios"
import IniciarSesion from './BotonSesion'




const Container = styled.div`
display: flex ;
padding:0 ;
  width: 100vw;
height:100vh;
background-color: #ffffff ;
`;

const ImagenContainer = styled.div`

width: 60%;
height:100%;
position: relative ;


`
const Imagen = styled.img`
width:100% ;
height:100%  ;
object-fit: cover ;

`

const DescripcionContainer = styled.div`
width: 32vw ;
/* background-color: #ffffff; */
position: relative ;
margin-left:5vw;
margin-right:5vw;
margin-top: 10vh ;
margin-bottom: 7vh ;
padding: 15px ;





`;


const Titulo = styled.h1`

font-size: 60px;
position:absolute ;
font-family: 'Bebas Neue', cursive;
letter-spacing: 2px ;
`;

const Descripcion = styled.div`
position: absolute ;
top: 140px ;

`;

const Form = styled.div`

width:30vw;
`;



const manejar = (e, exp)=>{

  validador(exp, e.target)
}

const InicioSesion = () => {

  const [form, setForm] = useState({});
  
  const handleChange = (e) =>{
      console.log('hola');
    setForm({
        ...form,
        [e.target.name]:e.target.value,
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
   
     
  } 
 

 
  
return(
  <Container>
    <ImagenContainer>
      <a name="sobre-nosotros"></a>
      <Imagen src={fondo5} />
    </ImagenContainer>
    <DescripcionContainer>
      <Titulo>Iniciar Sesion</Titulo>
      <Descripcion>
        <Form>
          <form onSubmit={handleSubmit}>

            
          <input type="text" name='u' id="u"  onChange={handleChange} />

            <div className="mb-3 form-floating">
              <input type="text" className="form-control " name='usuario' id="usuario" placeholder="name@example.com" onChange={handleChange} />
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <div className="valid-feedback">
                Looks good!
              </div>
              <div className="invalid-feedback">
                Incorrecto
              </div>
            </div>

            <div className="form-floating mb-3">
              <input  onChange={handleChange}  type="password" className="form-control " id="password" placeholder="name@example.com" required />
              <label htmlFor="password" className="form-label">Contraseña</label>
              <div className="valid-feedback">
                Looks good!
              </div>
              <div className="invalid-feedback">
                Incorrecto
              </div>
            </div>

            <button type="submit"  className="btn btn-primary">Sign in</button>
          </form>
        </Form>
      </Descripcion>
    </DescripcionContainer>
  </Container>
)



}

export default InicioSesion