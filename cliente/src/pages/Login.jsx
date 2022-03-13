
import React from 'react'
import NavBar from "../components/NavBar"
import Principal from '../components/Principal'
import styled from 'styled-components'
import SobreNosotros from '../components/SobreNosotros'
import Contacto from '../components/Contacto'
import Formulario from '../components/Formulario'
import InicioSesion from '../components/InicioSesion'

const Contenedor=styled.div`
padding:0 ;


`

const Login=()=> {
  return (
    <Contenedor>
      <NavBar/>
        <InicioSesion/>
    </Contenedor>
    
  )
}

export default Login