import react from 'react'; 
import NavBar from '../components/Common/NavBar';
import Table from '../components/Common/Table';
import PieChart from '../components/Chart/PieChart.jsx';
import TextCard from '../components/Common/Card/TextCard.jsx';
import Profile from '../components/Common/Profile';

import {useState, useEffect, useRef} from 'react';
export default function UserPage() {

    
    const [profileData, setData] = useState(null);
    const [isMounted, setMounted] = useState(false);
    const [count, setCount] = useState(0);

    const [startVal, setStartVal ]= useState(0);
     const currentAmount = useRef(500);

    const getData = async () => {
        try {
            const [userUnformatted, accountData] = await Promise.all([
                fetch('https://budgetapp-vdsp.onrender.com/api/users').then(data => data.json()),
                fetch(`https://budgetapp-vdsp.onrender.com/api/accounts`).then(data => data.json()),
            ])
            const userData = userUnformatted[0];
            setCount(accountData[0].current_amount);
            setStartVal(accountData[0].current_amount);
            setData({userData, accountData});
            setMounted(true);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();
        console.log('The page is mounted');
    },[]); //!Rerun 

    //useTotalBalance
    // const handleChange = () => {
    //   if(!isMounted)
    //      return count;
    //   else {
    //     setCount(Coroutine(count,currentAmount,400));
    //     return count;
    //   }
        
    // }

    useEffect(()=>{
      if(count <= 500) return;
      
      let interval = setInterval(() => {
        setCount(x => {
          let newCount= x - 10;
          return newCount <= 500 ? 500: newCount;
        })
      }, 80);

      return () => clearInterval(interval);
    },[count])
    // function Coroutine(initialVal,targetVal, rate) {
    //   return initialVal != targetVal ? initialVal -= rate : targetVal;
    // }
    
    // loaded function for when data is fetched.
    const loaded = () => {
      return (
        <>
          <NavBar/>
          <pre>{JSON.stringify(profileData,null,2)}</pre>
          {/*Card container*/}
          <section style={{display:"flex", marginBottom: "10rem",flexflow:"row no-wrap"}}>
              <Profile renderStyle={"profile_big"} data={{src:"src/assets/sfa3-akuma2.jpg", alt:"Akuma Picture"}}/>
              <TextCard renderStyle={'card_basic'} data={{name:profileData.userData.name,total:count}}/>
             
          </section>
          <section style={{width:'100%', height:'35rem', display:'flex'}}>
            <div style={{width:'40%', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <h2 style={{}}>Total Balance of Accounts</h2>
              {BuildComponents(
                  profileData.accountData,
                  <TextCard renderStyle={'card_basic_slim'}/>,
                  Account,
                  2)};
            </div>
            <PieChart/>
          </section>
        </>
      );
    };
  
    // Function for when data doesn't exist.
    const loading = () => {
      return <h1>Loading...</h1>;
    };
  
  return profileData ? loaded() : loading();  
}

function BuildComponent(data, component_template, class_obj,){

}
function BuildComponents(dataArray,component_template, class_obj, limit,){
  // Take the first 5 accounts
  let newArray = [];
  let i = 0;
  while( i < limit) {
    let obj = new class_obj(dataArray[i]);
    newArray.push(component_template)
    i +=1;
  }
  return newArray;
}

class Account {
  constructor({account_num,type,date_opened,date_closed,starting_amount,current_amount}){
      this.account_num=account_num, this.type=type,this.dateOpen=date_opened,
      this.dateClosed=date_closed, this.start=starting_amount, this.current=current_amount
  }
}