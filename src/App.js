import { useState } from 'react'; 
import './App.css';
import Header from  './components/Header/header.js';
import Formulario from './components/Formulario/Formulario.js';
import MyOrg from './components/MyOrg/myOrg.js';

import Equipo from './components/Equipo/equipo.js';
console.log(Header);
function App() {

  const [mostrarFormulario, actualizarMostrar]=useState(false)

  const cambiarMostrar = (props) => {
    actualizarMostrar(!mostrarFormulario)}
  //listar equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front-End", 
      colorPrimario: "#82CFFA ",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157 ",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Design",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }

  ]

  return (
    <div >
      
      <Header/>
      {/* {mostrarFormulario ?       <Formulario/> : <></>} */}
      {mostrarFormulario && <Formulario  equipos={equipos.map((equipo)=> equipo.titulo)}  />}
      <MyOrg cambiarMostrar={cambiarMostrar} />

     {
      equipos.map( (equipo) =>{
        return <Equipo datos={equipo} key= {equipo.titulo}/>
      })
     }
    </div>
  );

}
export default App;