import { BiSolidUserBadge } from "react-icons/bi"

interface PropsListStudentMatriculas {
  data: GetDBMatriculados
}

const ListStudentMatriculados: React.FC<PropsListStudentMatriculas> = ({ data }) => {
  const { alumnoMatriculado, apellidos, categoria, dni, fechaMatriculado, fechaNacimiento, grado, nombres, seccion, sexo, telefono } = data
  const dateComplete = fechaMatriculado.slice(0,8)
  return (
    <div className="flex-[0_1_18rem] flex hover:border-blue-500 transition min-h-[22rem] relative rounded-md border-blue-500/20 shadow-green-300/40 shadow-md border">
      <BiSolidUserBadge className="absolute right-0 top-0 text-4xl bg-black/60 text-white rounded" />
      <div className="p-2  justify-center w-full font-titleFontLogin flex  flex-col">
        <p className="border-b pb-4 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          DNI:
          <span className="text-blue-400/80">
            {dni}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 shadow-md shadow-blue-400/10 text-black/40" >
          Nombre:
          <span className="text-blue-400/80">
            {nombres}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Apellidos:
          <span className="text-blue-400/80">
            {apellidos}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Situación:
          <span className="text-blue-400/80">
            {categoria}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Matriculado:
          <span className="text-blue-400/80">
            {alumnoMatriculado ? "Si" : "No"}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Grado:
          <span className="text-blue-400/80">
            {grado}
          </span>
        </p>

        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Fecha de matricula:
          <span className="text-blue-400/80">
            {dateComplete}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Fecha de nacimiento:
          <span className="text-blue-400/80">
            {fechaNacimiento}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Sección:
          <span className="text-blue-400/80">
            {seccion}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Teléfono:
          <span className="text-blue-400/80">
            {telefono}
          </span>
        </p>
        <p className="border-b pb-2 pt-2 text-black/40 shadow-md shadow-blue-400/10" >
          Sexo:
          <span className="text-blue-400/80">
            {sexo}
          </span>
        </p>
      </div>
    </div>
  )
}
export default ListStudentMatriculados
