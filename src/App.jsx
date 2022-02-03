
import Formulario from "./components/Formulario"
import HeaderSeguimiento from "./components/HeaderSeguimiento"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  

  return (
    
    <div className="container mx-auto mt-20">
      <HeaderSeguimiento />
      <Formulario />
      <ListadoPacientes />
    </div>
  )
}

export default App
