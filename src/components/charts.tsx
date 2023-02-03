import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import CustomAxisIcons from './CustomAxisIcons';
import CustomBarLabel from './CustomBarLabel';

interface CostData {
  name: string;
  cost: number;
}

interface CostDataArray {
  data: CostData[];
}

const Charts: React.FC<CostDataArray> = ({ data }) => {
  
  return(
    <div style={{width: "400px", height: "500px", rotate:"90deg"}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{top: 55,right: 30,left: 20,bottom: 100}}>
          <XAxis dataKey="name" tick={CustomAxisIcons} />
          <Bar barSize={50} dataKey="cost" fill="#8884d8" label={CustomBarLabel} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Charts