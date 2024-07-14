import { useState } from 'react'; 
import './App.css';
import Header from  './components/Header/header.js';
import Formulario from './components/Formulario/Formulario.js';
import MyOrg from './components/MyOrg/myOrg.js';

import Equipo from './components/Equipo/equipo.js';
import Footer from './components/Footer/Footer.jsx';
console.log(Header);
function App() {
  //ternario --> mostrar : noMostrar
  const [mostrarFormulario, actualizarMostrar]=useState(false)

  const [colaboradores, actualizarColaboradores ]= useState([
    {
      equipo: "Front-End",
      foto : "https://avatars.githubusercontent.com/u/22450697?s=400&u=5b2b0099b930c8502a52f3183eeeed8f46b0b516&v=4",
      nombre: "Abdiel",
      puesto: "Programador",
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)}

  //Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

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
      {
      mostrarFormulario && <Formulario  
      equipos={equipos.map((equipo)=> equipo.titulo)}
      registrarColaborador={registrarColaborador}

      />
      }
      <MyOrg cambiarMostrar={cambiarMostrar} />

     {
      equipos.map( (equipo) =>{
        return <Equipo datos={equipo} key= {equipo.titulo}
        colaboradores={colaboradores.filter(colaborador=> colaborador.equipo === equipo.titulo)}/>
      })
     }
     <Footer></Footer>
    </div>
     
  );
 

}
export default App;