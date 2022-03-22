import './App.css';
import 'styled-components'
import React, {useState,useEffect} from 'react';
import DataTable, {createTheme} from 'react-data-table-component';

const App = () => {

    const [users, setUsers] = useState([])

    const URL = 'http://www.raydelto.org/agenda.php'
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setUsers(data)
    }

    useEffect( ()=>{
      showData()
    }, [])

    const columnas =[
      {
        name: 'nombre',
        selector: row => row.nombre
      },
      {
        name: 'apellido',
        selector: row => row.apellido
      },
      {
        name: 'telefono',
        selector: row => row.telefono
      }
    ]



  return (
    <div className="App">
      <h1>Agenda de Contactos</h1>
        <DataTable
        columns={columnas}
        data={users}
        pagination
        />
    </div>
  );
}

export default App;
