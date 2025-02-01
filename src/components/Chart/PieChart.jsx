import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import react from 'react';

  const data = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
      
  

export default function MyPieChart({datas}){

    return  (
        <ResponsiveContainer width="100%" height={300}>                          
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#82ca9d"/>
            </PieChart>
      </ResponsiveContainer>
    );
};