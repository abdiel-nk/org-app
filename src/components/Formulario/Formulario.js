import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import Boton from "../Boton/boton"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
const Formulario = () =>{
    const manejarEnvio= (event) =>{
        event.preventDefault();
        console.log('manejar envioxd', event);
        
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}> 
            <h2>Rellena el formulario para crear un colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"></CampoTexto>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"></CampoTexto>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de la foto"></CampoTexto>
            <ListaOpciones titulo="Equipo " placeholder="Selecionar equipo"></ListaOpciones>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
export default Formulario 