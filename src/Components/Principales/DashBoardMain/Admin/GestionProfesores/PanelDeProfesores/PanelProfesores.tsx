// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { addDoc, collection } from "firebase/firestore";
// import { dbFire } from "../../../../../firebase/Config/firestore";
// import { auth } from "../../../../../firebase/Config/auth";
// import axios from "axios";
// const usuarios = [
//   {
//     name: "rodrigo",
//     curso: "matematica",
//     id: "1"
//   },
//   {
//     name: "rodrigo",
//     curso: "historia",
//     id: "2"
//   },
//   {
//     name: "rodrigo",
//     curso: "geografia",
//     id: "3"
//   },
//   {
//     name: "rodrigo",
//     curso: "historia",
//     id: "4"
//   }

import { BsCardChecklist } from "react-icons/bs"


const PanelProfesores = () => {
  // const [newPorfesor, setNewPorfesor] = useState();
  // const [backgroundColor, setBackgroundColors] = useState("");
  // const [imageUrl, setImageUrl] = useState<string>("https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");
  // const generateRandomColor = () => {
  //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //   setBackgroundColors(randomColor)
  // };
  // const query = 'education'

  // const url = `https://api.unsplash.com/photos/random?count=1&query=${query}&client_id=fq4kbtAscv29Igdu2xzvCyCQIvSXLNeSoa5FQ8EvDws`
  // const create = async () => {
  //   const { data } = await axios.get(url)
  //   const img = data[0].urls.regular

  //   try {
  //     const refCollection = collection(dbFire, "profesores")

  //     const email = "rodrigo15975@hotmail.com"
  //     const password = "Coco70537447"
  //     const { user } = await createUserWithEmailAndPassword(auth, email, password)

  //     const data = {
  //       email,
  //       name: "rodrigo rumpler",
  //       password,
  //       img,
  //       uid: user.uid,
  //       role: "admin",
  //       cursos: [
  //         {
  //           name: "matematica"
  //         },
  //         {
  //           name: "historia"
  //         }
  //       ],
  //       horario: [
  //         {
  //           horario: "7.45AM : 9.45AM"
  //         }
  //       ]
  //     }
  //     await addDoc(refCollection, data)
  //     console.log(user);


  //   } catch (err) {
  //     console.log(err);

  //   }

  // }

  // const [profesor, setProfesor] = useState({
  //   nombre: '',
  //   correo: '',
  //   telefono: '',
  //   departamento: '',
  //   rolesPermisos: '',
  //   asignaciones: [{ curso: '', grado: '', seccion: '', dias: [] }],
  // });

  // const handleInputChange = (index, event) => {
  //   const { name, value } = event.target;
  //   const asignaciones = [...profesor.asignaciones];
  //   asignaciones[index][name] = value;
  //   setProfesor({ ...profesor, asignaciones });
  // };

  // const handleAgregarAsignacion = () => {
  //   setProfesor({
  //     ...profesor,
  //     asignaciones: [...profesor.asignaciones, { curso: '', grado: '', seccion: '', dias: [] }],
  //   });
  // };

  // const handleEliminarAsignacion = (index) => {
  //   const asignaciones = [...profesor.asignaciones];
  //   asignaciones.splice(index, 1);
  //   setProfesor({ ...profesor, asignaciones });
  // };

  // const handleDiasSeleccionados = (index, event) => {
  //   const { value, checked } = event.target;
  //   const asignaciones = [...profesor.asignaciones];
  //   const dias = [...asignaciones[index].dias];
  //   if (checked) {
  //     dias.push(value);
  //   } else {
  //     const diaIndex = dias.indexOf(value);
  //     if (diaIndex !== -1) {
  //       dias.splice(diaIndex, 1);
  //     }
  //   }
  //   asignaciones[index].dias = dias;
  //   setProfesor({ ...profesor, asignaciones });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Aquí puedes enviar los datos del profesor al servidor o realizar otras acciones.
  //   console.log(profesor);
  // };

  return (
    <>
      <div className="text-center text-2xl p-4 bg-white shadow-md rounded-md">
        <p className="flex items-center justify-center gap-2 text-[#2563ebe6] underline" >Lista de Profesores <BsCardChecklist /> </p>
      </div>
      <div className="border border-[#2563ebe6]/30 bg-white min-h-[40rem] mt-8 shadow-lg px-4 rounded-3xl flex items-center justify-center" >
       
        {/* <button onClick={create} >crear</button> */}
        {/* <div className="h-[15rem] w-[25rem] relative">
            <div className="relative inset-0 h-full w-full">
              <div className="relative h-full  bg-black/50" >
                <img src="" className="absolute top-0 h-[8rem] w-full object-cover bg-black/50 " alt="" />
                <div className="relative w-full bg-black/40 h-full" >
                  <p className="text-white" >hola</p>
                </div>
              </div>
            </div>       
          </div> */}
        {/* <form onSubmit={handleSubmit}>
          <label>
            Nombre del Profesor:
            <input type="text" name="nombre" value={profesor.nombre} onChange={(e) => setProfesor({ ...profesor, nombre: e.target.value })} />
          </label>
          <div>
            <h3>Asignaciones</h3>
            {profesor.asignaciones.map((asignacion, index) => (
              <div key={index}>
                <label>
                  Curso:
                  <input type="text" name="curso" value={asignacion.curso} onChange={(e) => handleInputChange(index, e)} />
                </label>
                <label>
                  Grado:
                  <input type="text" name="grado" value={asignacion.grado} onChange={(e) => handleInputChange(index, e)} />
                </label>
                <label>
                  Sección:
                  <input type="text" name="seccion" value={asignacion.seccion} onChange={(e) => handleInputChange(index, e)} />
                </label>
                <div>
                  <label>Días de Clase:</label>
                  <input type="checkbox" name="lunes" value="Lunes" checked={asignacion.dias.includes('Lunes')} onChange={(e) => handleDiasSeleccionados(index, e)} /> Lunes
                  <input type="checkbox" name="martes" value="Martes" checked={asignacion.dias.includes('Martes')} onChange={(e) => handleDiasSeleccionados(index, e)} /> Martes
                  <input type="checkbox" name="miercoles" value="miercoles" checked={asignacion.dias.includes('Miercoles')} onChange={(e) => handleDiasSeleccionados(index, e)} /> Miercoles
                  <input type="checkbox" name="jueves" value="jueves" checked={asignacion.dias.includes('jueves')} onChange={(e) => handleDiasSeleccionados(index, e)} /> Jueves
                </div>
                <button type="button" onClick={() => handleEliminarAsignacion(index)}>Eliminar</button>
              </div>
            ))}
            <button type="button" onClick={handleAgregarAsignacion}>Agregar Asignación</button>
          </div>
          <button type="submit">Guardar</button>
        </form> */}
      </div>


    </>
  )
}

export default PanelProfesores
