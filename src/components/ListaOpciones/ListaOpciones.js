import "./ListaOpciones.css"
const ListaOpciones = (props)=>{

     //map
   
    const equipo =[
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Design",
        "Movil",
        "Innovación y Gestión"
    ]
    const manejarCambio =(e)=>{
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value)
    }
    
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden> Seleccionar equipo</option>
            {equipo.map((equipo, index) =>{
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones