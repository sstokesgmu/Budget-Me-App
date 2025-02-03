import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import react,{useState,useCallback} from 'react';
import { mx_bilerp_0 } from "three/src/nodes/materialx/lib/mx_noise.js";


const renderActiveShape = (props) => {
  
  const RADIAN = Math.PI/180;

  const{
    cx,cy, //Center of the pie chart
    midAngle, // middle point of the segment of the chart
    innerRadius,//inner circle of the pie chart
    outerRadius, //outer circle of the pie chart
    startAngle,endAngle, // define the angular spread of the segment or shape in degrees
    fill, // color
    payload, //data object of the segment
    percent, //percentage of the total value the segment represents
    value, //Actual value of the segement, GroupA = 100
  } = props;

  //props controls the Position/Geometry, Apperance and data, Midpoint
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  
   const scaledOuterRadius = outerRadius * 1.1; // 10% larger for the hovered segment
  return (
    <g>
      <text x={cx} y={cy - 30} textAnchor="middle" fill={fill} fontSize="40">
        {payload.name} {/* Show account name */}
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill={fill} fontSize="35">
        {`$${value}`} {/* Show the value of the segment */}
      </text>
      <text x={cx} y={cy + 50} textAnchor="middle" fill={fill} fontSize="30">
        {`(${(percent * 100).toFixed(2)}%)`} {/* Show the percentage */}
      </text>
      <Sector
        cx={cx} cy={cy} 
        innerRadius={innerRadius} outerRadius={scaledOuterRadius}
        startAngle={startAngle} endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx} cy={cy}
        startAngle={startAngle} endAngle={endAngle}
        innerRadius={outerRadius+4} outerRadius={outerRadius+10}
        fill={fill}
      />
    </g>
  );

}     
  


export default function MyPieChart({data}){
  const [activeIndex, setActiveIndex] = useState(0);
    
    const onPieEnter = useCallback((_,index)=>{setActiveIndex(index)},[setActiveIndex]);

    const onPieLeave = useCallback((_,index)=>{setActiveIndex(null);},[setActiveIndex]);

    const objs = data.map(account => {
      return {
        name: "Account " + account.account_num,
        value: account.current??0,
      }
    })  
    return  (
      <ResponsiveContainer width="50%" height="100%" style={{flex:'1'}}>                          
          <PieChart>
              <Pie  activeIndex={activeIndex} activeShape={renderActiveShape} data={objs} nameKey="name" dataKey="value" cx="50%" cy="50%" innerRadius={200} outerRadius={250} fill="#82ca9d" onMouseEnter={onPieEnter} onMouseLeave={onPieLeave}/>
          </PieChart>
      </ResponsiveContainer>
    );
};


