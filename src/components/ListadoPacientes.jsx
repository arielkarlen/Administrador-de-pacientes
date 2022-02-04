import Paciente from "./Paciente";




function ListadoPacientes() {
    return(
        <div className="md:w-1/2 lg:w3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center ">Listado Pacientes</h2>
            <p className="font-bold text-xl mb-10 mt-5 text-center">Administra tus <span className="text-indigo-600 ">pacientes y citas</span></p>
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
        </div>
    )
}

export default ListadoPacientes;