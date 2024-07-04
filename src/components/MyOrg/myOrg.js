// import { useState } from "react"
import "./myOrg.css"
const  MyOrg =(props)=>{


    // const [mostrar, actualizarMostrar]=useState(true)
    console.log(props);
    // const manejarClick = () =>{
    //     console.log("mostrar / ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="section-org">
        <h3 className="title">Mi Organización</h3>
        <img className="img" src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}
export default MyOrg