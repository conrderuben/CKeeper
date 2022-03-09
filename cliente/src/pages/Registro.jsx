
import React from 'react'
import NavBar from "../components/NavBar"
import Principal from '../components/Principal'
import styled from 'styled-components'
import SobreNosotros from '../components/SobreNosotros'
import Contacto from '../components/Contacto'
import Formulario from '../components/Formulario'

const Contenedor=styled.div`
padding:0 ;
background-color: #00a7f5;

`

const Registro=()=> {
  return (
    <Contenedor>
        <NavBar/>
        <Formulario/>
    </Contenedor>
    
  )
}

export default Registro