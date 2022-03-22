import React, { useState } from "react";


export default function Formulario(props){

    const [nombre, Setname] = useState("");
    const [apellido, SetLastname] = useState("");
    const [telefono, SetTel] = useState("");

    const cambiarNombre = (e) =>{
        console.log(e);
    }
    const cambiarApellido = (e) =>{
        console.log(e);
    }
    const cambiarTelefono = (e) =>{
        console.log(e);
    }

    return(
        <div>
            <div>
                <h2>Nuevo Contacto</h2>
                <label>Nombre:
                                <input type="text" value={nombre} onChange={cambiarNombre} />
                </label>
                <label>Apellido:
                                <input type="text" value={apellido} onChange={cambiarApellido} />
                </label>
                <label>Telefono:
                                <input type="tel" value={telefono} onChange={cambiarTelefono} />
                </label>
                <button>Guardar</button>
            </div>
        </div>
    );

}