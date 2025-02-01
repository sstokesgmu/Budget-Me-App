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
        <ResponsiveContainer width="50%" height="100%" style={{flex:'1'}}>                          
            <PieChart>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={200} outerRadius={250} fill="#82ca9d"/>
            </PieChart>
        </ResponsiveContainer>
        
        
    );
};