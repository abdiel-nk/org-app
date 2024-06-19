import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"

import ListaOpciones from "../ListaOpciones/ListaOpciones"
const Formulario = () =>{
    return <section class="formulario">
        <form>
            <h2>Rellena el formulario para crear un colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"></CampoTexto>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"></CampoTexto>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de la foto"></CampoTexto>
            <ListaOpciones titulo="Equipo " placeholder="Selecionar equipo"></ListaOpciones>
        </form>
    </section>
}
export default Formulario 