import { LineChart, Line, CartesianGrid, XAxis,YAxis, ResponsiveContainer, Tooltip, Legend} from "recharts";






export default function BarGraph_Budget({transaction,account}) {
  console.log(account);
  console.log(transaction);

  const data = [
    {
      "date": transaction.date,
      "amt": 400
    },
  
  
  
  ]
  
  
  return (
    <div>
      <LineChart
        width={1000}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
{/* 
        In Recharts, when you set the dataKey of a <Line> component to uv and pv, you're telling the chart to plot the values associated with those keys from your dataset on the Y-axis of the chart. The meaning of uv and pv is entirely up to you and depends on how you structure your data. */}
        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

