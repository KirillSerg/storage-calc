import React from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from 'recharts';
import CustomAxisIcons from './CustomAxisIcons';
import CustomBarLabel from './CustomBarLabel';

export interface CostData {
  name: string;
  cost: number;
}

interface CostDataArray {
  costData: CostData[];
  minCoastServiceName: string;
}

const Charts: React.FC<CostDataArray> = ({ costData, minCoastServiceName }) => {

  const colors = {
    backblaze: "red",
    bunny: "orange",
    scaleway: "purple",
    vultr: "skyblue",
  }

  return(
    <div style={{width: "400px", height: "500px", rotate:"90deg"}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={costData} margin={{top: 55,right: 30,left: 20,bottom: 100}}>
          <XAxis dataKey="name" tick={CustomAxisIcons} />
          <Bar barSize={50} dataKey="cost" label={CustomBarLabel}>
            {costData.map((entry, index) => {
              return <Cell key={index} fill={entry.name === minCoastServiceName ? colors[entry.name as keyof typeof colors] : "lightgrey"} />
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Charts