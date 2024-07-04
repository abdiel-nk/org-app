import { useState } from 'react'; 
import './App.css';
import Header from  './components/Header/header.js';
import Formulario from './components/Formulario/Formulario.js';
import MyOrg from './components/MyOrg/myOrg.js';

console.log(Header);
function App() {

  const [mostrarFormulario, actualizarMostrar]=useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)}
  

  return (
    <div >
      
      <Header/>
      {/* {mostrarFormulario ?       <Formulario/> : <></>} */}
      {mostrarFormulario && <Formulario/>}
      <MyOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );

}
export default App;
