
import Formulario from "./components/Formulario"
import HeaderSeguimiento from "./components/HeaderSeguimiento"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  

  return (
    
    <div className="container mx-auto mt-20">
      <HeaderSeguimiento />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
