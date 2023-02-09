interface CustomBarLabelProps {
  x: number;
  y: number;
  value: number;
}

const CustomBarLabel = ({ x, y, value }: CustomBarLabelProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text transform="rotate(-90)" textAnchor='middle' x={25} y={32} fill="#666"  >
        {`${value.toFixed(1)} $`}
      </text>
    </g>
  )
};

export default CustomBarLabel