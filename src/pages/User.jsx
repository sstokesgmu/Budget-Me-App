import react, { cloneElement } from 'react'; 
import NavBar from '../components/Common/NavBar';
import Table from '../components/Common/Table';
import PieChart from '../components/Chart/PieChart.jsx';
import TextCard,{Account} from '../components/Common/Card/TextCard.jsx';
import Profile from '../components/Common/Profile';
import {useState, useEffect,} from 'react';

//Utility Functions
import ComponentFactory from '../Factory.jsx';

export default function UserPage() {
    const [profileData, setData] = useState(null);
    const [isMounted, setMounted] = useState(false);
    const [count, setCount] = useState({startingSum: 0, currentSum:0});

    //Modal
    const [isModalOpen, setModalToOpen] = useState(false);

    

    const getData = async () => {
        try {
            const [userUnformatted, accountData] = await Promise.all([
                fetch('https://budgetapp-vdsp.onrender.com/api/users').then(data => data.json()),
                fetch(`https://budgetapp-vdsp.onrender.com/api/accounts`).then(data => data.json()),
            ])
            const userData = userUnformatted[0];
           let cumulative = Cumulative(accountData);
   
            //Create the data here
            setData({userData, accountData});
            setMounted(true);
            setCount(cumulative);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();
        console.log('The page is mounted');
    },[]); //!Rerun 

    useEffect(() => {
      if(count.startingSum <= count.currentSum) return;
      let interval = setInterval(()=>{
        setCount(previous=> {
          let newCount = previous.startingSum - 10;
          return newCount <= previous.currentSum ? {startingSum:previous.currentSum, currentSum:previous.currentSum}:
                  {startingSum:newCount, currentSum:previous.currentSum};
        });
      }, 80);
      return () => clearInterval(interval);
    }, [count]);

    

    function Cumulative(data)
    {
      //deconstuct the array for only starting and curret values
      const startingBalances = data.map(element => element.starting_amount);
      const currentBalances = data.map(element=> element.current_amount);
      let startingSum = startingBalances.reduce((partialSum, a) => partialSum + a, 0);
      let currentSum = currentBalances.reduce((partialSum, a) => {
          if (a == null)  
            a = 0;     
          return (partialSum + a)});
      return {startingSum, currentSum};
    }
    // loaded function for when data is fetched.
    const loaded = () => {
      return (
        <>
          <NavBar/>
          <pre>{JSON.stringify(profileData,null,2)}</pre>
          {/*Card container*/}
          <section style={{display:"flex", marginBottom: "10rem",flexflow:"row no-wrap"}}>
              <Profile renderStyle={"profile_big"} data={{src:"src/assets/sfa3-akuma2.jpg", alt:"Akuma Picture"}}/>
             <TextCard style={'card_basic'} data={{name:profileData.userData.name,numberofAccounts:profileData.accountData.length,total:count.startingSum}}/> 
             
          </section>
          <section style={{width:'100%', height:'35rem', display:'flex'}}>
            <div style={{width:'40%', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <h2 style={{}}>Total Balance of Accounts</h2>
                  {ComponentFactory.BuidlComponents(
                    profileData.accountData,
                    TextCard,
                    4, 
                    Account,
                    'card_button_slim')
                  }
            </div>
            <PieChart data={profileData.accountData.map(data =>
              ComponentFactory.FormatDataToMatchClass(Account,data)
            )}/>        
          </section>
        </>
      );
    };
      // Function for when data doesn't exist.
    const loading = () => { return <h1>Loading...</h1>;};
    return profileData ? loaded() : loading();  
}

// function BuildComponent(data, component_template, class_obj,){

// }
// function BuildComponents(dataArray,component_template, obj, limit){
//   let newArray = [];
//   let i = 0;
//   limit  = Math.min(dataArray.length, limit);
//   while (i < limit) {
//     let instance = new obj(dataArray[i]);
//     const clone = cloneElement(component_template, {key:i,data:instance})
//     newArray.push(clone);
//     i +=1;
//   }
//   return newArray;
// }

// function FormatData(class_instance, dataArray, limit){
//   limit  = Math.min(dataArray.length,limit);
//   let newArray = [];
//   let i = 0;
//   while (i < limit) {
//     let instance = new class_instance(dataArray[i]);
//     newArray.push(instance);
//     i +=1;
//   }
//   return newArray;
// }