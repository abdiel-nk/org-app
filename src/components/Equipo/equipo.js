import "./equipo.css"
import Colaborador from "../Colaborador/Colaborador"
const Equipo  = (props) =>{

    //desctructuracion
    const {titulo , colorPrimario, colorSecundario} = props.datos

    const obj={
        backgroundColor: colorSecundario
    }
    const estiloTitulo= {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
        <Colaborador/>
        <Colaborador/>
        <Colaborador/>
        <Colaborador/>
        </div>
    </section>
}

export default Equipo