import React from 'react'
import styled from 'styled-components'
import fondo2 from "../assets/img/fondo2.jpg"
import fondo1 from "../assets/img/fondo1.jpg"
import fondo3 from "../assets/img/fondo3.jpg"
import fondo4 from "../assets/img/fondo4.jpg"
import fondo5 from "../assets/img/fondo5.jpg"


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
margin-top: 14vh ;
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

const Formulario = () => {
  return (


    <Container>
        <ImagenContainer>
            <a name="sobre-nosotros"></a>
            <Imagen src={fondo3}/>
        </ImagenContainer>
        <DescripcionContainer>
            <Titulo>Registrate</Titulo>
            <Descripcion>
              <Form>
                <form>
          
                <div class="mb-3 form-floating">
                <input type="text" class="form-control is-valid" id="validationServer01" placeholder="name@example.com" required/>
                <label for="validationServer01" class="form-label">First name</label>
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  maaaaal
                </div>
                </div>
                  
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Contraseña</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Nombre</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Apellidos</label>
                  </div>
                  
                  <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Fecha de Nacimiento</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="tel" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Telefono</label>
                  </div>
                 
                
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
              </Form>
            </Descripcion>
        </DescripcionContainer>
    </Container>
    
  )}

export default Formulario