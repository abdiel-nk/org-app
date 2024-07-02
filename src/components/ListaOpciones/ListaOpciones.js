import "./ListaOpciones.css"
const ListaOpciones = ()=>{

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
    
    return <div className="lista-opciones">
        <label></label>
        <select>
            {equipo.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones