import React, { useState } from "react";


export default function Formulario(props){

    const [nombre, Setname] = useState("");
    const [apellido, SetLastname] = useState("");
    const [telefono, SetTel] = useState("");

    const URL = 'http://www.raydelto.org/agenda.php'
    const SendData = async () => {
        try{
      const response = await fetch(URL,
        {
            method: 'post',
            mode: 'no-cors',
            headers:{
                'accept':'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nombre: 'nombre',
                apellido: 'apellido',
                telefono: 'telefono'
            })
        })
        console.log('result' + response);
    }catch(e){
        console.log(e);
    }
    }

    const cambiarNombre = (e) =>{
        Setname(e.target.value);
    }
    const cambiarApellido = (e) =>{
        SetLastname(e.target.value);
    }
    const cambiarTelefono = (e) =>{
        SetTel(e.target.value);
    }
    const SendDat = (e) =>{
        e.preventDefault();
        SendData();
        console.log(`nombre: ${nombre}, apellido: ${apellido}, telefono: ${telefono}`);

    }

    return(
        <div>
            <form onSubmit={SendDat}>
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
                <button type="submit">Guardar</button>
            </form>
        </div>
    );

}