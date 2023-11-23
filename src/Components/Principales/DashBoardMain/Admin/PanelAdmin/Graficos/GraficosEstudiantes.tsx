import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'Repitente' },
  { value: 5, label: 'Sincurso' },
  { value: 10, label: 'Concurso' },
  { value: 5, label: 'Nuevo' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function GraficoEstudiantes() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>100%</PieCenterLabel>
    </PieChart>
  );
}