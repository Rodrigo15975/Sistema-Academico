import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale , Title);

//Funciona correctamente 
const BarChart = () => {
  // Datos para el gráfico de barras
  const chartData = {
    labels: ["Diciembre", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Ventas Mensuales",
        data: [5, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(3, 45, 255, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  // Opciones para el gráfico
  // const options = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  return (
    <div className="chart">
      <Chart type='line' data={chartData} />
    </div>
  );
};

export default BarChart;
