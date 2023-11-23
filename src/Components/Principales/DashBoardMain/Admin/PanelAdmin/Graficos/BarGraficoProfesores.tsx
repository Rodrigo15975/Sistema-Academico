import { styled } from "@mui/material";
import { useDrawingArea } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";
const BarGraficoProfesores = () => {

  const data = [
    { value: 5, label: 'Profesores' },
  ];
  const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
  }));

  const size = {
    width: 500,
    height: 200,
  };


  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <PieChart className="flex items-center justify-center" series={[{ data, innerRadius: 80 }]} colors={["#264effdd"]} {...size}>
      <PieCenterLabel  > 5  </PieCenterLabel>
    </PieChart>
  );


}

export default BarGraficoProfesores
