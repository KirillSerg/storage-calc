import React from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from 'recharts';
import styled from 'styled-components';

import CustomBarLabel from './CustomBarLabel';
import { colors } from './mockData';

const ChartWrapper = styled.div`
  height: 400px;
`;

export interface CostData {
  name: string;
  cost: number;
}

interface CostDataArray {
  costData: CostData[];
  minCoastServiceName: string;
}

const Charts: React.FC<CostDataArray> = ({ costData, minCoastServiceName }) => {

  

  return(
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={costData}>
          <XAxis tick={false} tickLine={false} />
          <Bar barSize={50} dataKey="cost" label={CustomBarLabel}>
            {costData.map((entry, index) => {
              return <Cell key={index} fill={entry.name === minCoastServiceName ? colors[entry.name as keyof typeof colors] : "lightgrey"} />
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
export default Charts