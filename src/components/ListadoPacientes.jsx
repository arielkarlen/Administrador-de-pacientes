import Paciente from "./Paciente";




const ListadoPacientes = ({pacientes}) => {

    console.log()
    return(
        <div className="md:w-1/2 lg:w3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
            <h2 className="font-black text-3xl text-center ">Listado Pacientes</h2>
            <p className="font-bold text-xl mb-10 mt-5 text-center">Administra tus <span className="text-indigo-600 ">pacientes y citas</span></p>
            {pacientes.map( paciente => (
            <Paciente 
             key={paciente.id}
             paciente={paciente}
            />

            ))}

         </>
            ) : (

                <>
                
                <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
            <p className="font-bold text-xl mb-10 mt-5 text-center">Comienza agregando pacientes <span className="text-indigo-600 ">y apareceran</span></p>
                
                
                </>
            )}
           
            
            
        </div>
    )
}

export default ListadoPacientes;