
import {useState}from 'react'
import Formulario from "./components/Formulario"
import HeaderSeguimiento from "./components/HeaderSeguimiento"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])


  return (
    
    <div className="container mx-auto mt-20">
      <HeaderSeguimiento 
      />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        
        />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
