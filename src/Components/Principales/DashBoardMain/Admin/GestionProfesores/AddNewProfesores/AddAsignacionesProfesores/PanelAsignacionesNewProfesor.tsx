// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Button from '@mui/material/Button';
// import * as yup from 'yup';

import { useFormik } from "formik";
import stateRegisterNewProfesor from "../../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor";

const PanelAsignacionesNewProfesor = () => {
  const { prueba} = stateRegisterNewProfesor()
    const formik = useFormik({
      initialValues: {
        role: "",
        asignaciones:""
      },
      onSubmit: prueba
    })

  return (
    <form onSubmit={formik.handleSubmit}>
      <button>prueba</button>
    </form>
  );
};

export default PanelAsignacionesNewProfesor;

// const validationSchema = yup.object<Datos>({
  
//   role: yup.string().required('El rol es requerido'),
//   asignacion: yup.string().when('role', {
//     is: 'Profesor',
//     then: yup.string().required('La asignación es requerida para el rol de Profesor'),
//     otherwise: yup.string().notRequired(),
//   }),
// });

// const PanelAsignacionesNewProfesor = () => {
//   const [selectedRole, setSelectedRole] = useState('');
//   const [selectedAsignacion, setSelectedAsignacion] = useState('');

//   const formik = useFormik({
//     initialValues: {
//       role: '',
//       asignacion: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   const handleRoleChange = (event: SelectChangeEvent) => {
//     setSelectedRole(event.target.value as string);
//     formik.setFieldValue('role', event.target.value as string);
//   };

//   const handleAsignacionChange = (event: SelectChangeEvent) => {
//     setSelectedAsignacion(event.target.value as string);
//     formik.setFieldValue('asignacion', event.target.value as string);
//   };

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <Box sx={{ minWidth: 120 }}>
//         <FormControl className='w-[20rem]' >
//           <InputLabel id="role-label">Selecciona un rol</InputLabel>
//           <Select
//             labelId="role-label"
//             id="role"
//             name="role"
//             value={selectedRole}
//             onChange={handleRoleChange}
//             error={formik.touched.role && Boolean(formik.errors.role)}
//           >
//             <MenuItem value="">Selecciona un rol</MenuItem>
//             {roles.map((role) => (
//               <MenuItem key={role} value={role}>
//                 {role}
//               </MenuItem>
//             ))}
//           </Select>
//           {formik.touched.role && formik.errors.role && (
//             <div style={{ color: 'red' }}>{formik.errors.role}</div>
//           )}
//         </FormControl>

//         {selectedRole === 'Profesor' && (
//           <FormControl fullWidth>
//             <InputLabel id="asignacion-label">Selecciona una asignación</InputLabel>
//             <Select
//               labelId="asignacion-label"
//               id="asignacion"
//               name="asignacion"
//               value={selectedAsignacion}
//               onChange={handleAsignacionChange}
//               error={formik.touched.asignacion && Boolean(formik.errors.asignacion)}
//             >
//               <MenuItem value="">Selecciona una asignación</MenuItem>
//               <MenuItem value="Asignación 1">Asignación 1</MenuItem>
//               <MenuItem value="Asignación 2">Asignación 2</MenuItem>
//               <MenuItem value="Asignación 3">Asignación 3</MenuItem>
//             </Select>
//             {formik.touched.asignacion && formik.errors.asignacion && (
//               <div style={{ color: 'red' }}>{formik.errors.asignacion}</div>
//             )}
//           </FormControl>
//         )}

//         <Button type="submit" variant="contained" color="primary">
//           Enviar
//         </Button>
//       </Box>
//     </form>
//   );
// };

// export default PanelAsignacionesNewProfesor;
