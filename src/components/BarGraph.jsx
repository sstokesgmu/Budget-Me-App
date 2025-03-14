import { LineChart, Line, CartesianGrid, XAxis,YAxis, ResponsiveContainer, Tooltip, Legend} from "recharts";
import { AmmoPhysics } from "three/examples/jsm/Addons.js";


function formatDate(dateString, timezone){
    timezone = 'en-us';
   return new Intl.DateTimeFormat(timezone, {
      weekday: 'short', day: '2-digit', year: 'numeric', hour:'2-digit',minute:'2-digit'
   }).format(new Date(dateString))
}

function createDataMatrix(account,transaction){
  
  let a = [];
  let i = 0 

  a.push({date: formatDate(account.date_opened,'hello'), amount:account.starting_amount})
  
  if(transaction !== null)
  {
    while(i < transaction.length)
      {
        let element = transaction[i];
        // Intl.DateTimeFormat (Native JavaScript):
        //Todo: I will have to get the date based on the location of the user
        //Todo: Edge Case how do we handle the separation of time a day chart, weekly chart, yearly chart
    
        //? Note: Right now we are assuming this chart represents transactions through out the week.
        const date = formatDate(transaction[i].date,'hello');
        //Todo: change name
        //! Question: How do I ensure the string values can only be deposit or withdrawl
        const amount =  transaction[i].trans_type.toUpperCase() === 'DEPOSIT' ? a[0].amount + transaction[i].amount : a[0].amount - transaction[i].amount;
        a.push({date,amount})
        i++;
      }
  }
  a.push({date: formatDate(account.date_closed), amount:account.current_amount})
  return a;
}

export default function BarGraph_Budget({bucket,account}) {
  const transactions =  bucket?.transactions ??  [];
  console.log(transactions);
  const data = createDataMatrix(account,transactions)
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
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

