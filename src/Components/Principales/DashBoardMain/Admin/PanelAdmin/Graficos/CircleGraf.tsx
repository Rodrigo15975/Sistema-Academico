import { PieChart } from '@mui/x-charts/PieChart';
const CircleGraf = () => {


  const data = [
    { value: 50, label: 'Estudiantes' },
    { value: 20, label: 'Cursos' },
  ];

  const size = {
    width: 500,
    height: 200,
  };


  return (
    <PieChart series={[{ data }]} {...size}>
    </PieChart>
  );

}

export default CircleGraf
