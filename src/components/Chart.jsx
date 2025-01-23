import { LineChart, Line, CartesianGrid, XAxis,YAxis } from "recharts" 
const data = [{name: "Page A", uv: 400, pv:2400, amt:2400},];



export default function Chart (){
    return (
        <LineChart width={400} height={400} data={data} margin={{top:5, right:20, bottom:5, left:0}}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="name"/>
            <YAxis />
        </LineChart>
    );
} 

