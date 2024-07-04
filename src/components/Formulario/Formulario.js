import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import Boton from "../Boton/boton"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
const Formulario = () =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] =
    useState("")

    const manejarEnvio= (event) =>{
        event.preventDefault();
        console.log('manejar envio')
        let datosEnviar = {
            nombre,
            puesto,
            foto
        }
        console.log(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}> 
            <h2>Rellena el formulario para crear un colaborador</h2>
            <CampoTexto 
            titulo="Nombre" placeholder="Ingresar nombre" required={true}
            valor={nombre}
            actualizarValor={actualizarNombre}/>

            <CampoTexto 
            titulo="Puesto" placeholder="Ingresar puesto"required 
            valor = {puesto} actualizarValor={actualizarPuesto}/>

            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de la foto"required valor={foto}
            actualizarValor={actualizarFoto}/>

            <ListaOpciones titulo="Equipo " placeholder="Selecionar equipo" required={true}></ListaOpciones>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
export default Formulario 