import react from 'react'; 
import Profile from '../components/Common/Profile'
import NavBar from '../components/Common/NavBar';
import Table from '../components/Common/Table';
import Card from '../components/Common/Card';



import {Cumulative} from '../test.js'
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
                fetch('http://192.168.1.162:8080/api/users').then(data => data.json()),
                fetch(`http://192.168.1.162:8080/api/accounts`).then(data => data.json()),
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
          let newCount= x - 100;
          return newCount <= 500 ? 500: newCount;
        })
      }, 1000);

      return () => clearInterval(interval);
    },[count])
    // function Coroutine(initialVal,targetVal, rate) {
    //   return initialVal != targetVal ? initialVal -= rate : targetVal;
    // }
    
    // loaded function for when data is fetched.
    const loaded = () => {
      return (
        <>
          <pre>{JSON.stringify(profileData,null,2)}</pre>
          {/*Card container*/}
          <section style={{display:"flex",gap:"10px", flexflow:"row no-wrap"}}>
              <Card renderStyle={"card-horiz-01"} data={{name:profileData.userData.name, total:count}}/>
              <Card renderStyle={"card-profile"} data={{src:"src/assets/sfa3-akuma2.jpg", alt:"Akuma Picture"}}/>
          </section>
          <h2> Number of Active Accounts: {profileData.userData.accounts.length}</h2>
          <h2>Estimated Balance: </h2>
        </>
      );
    };
  
    // Function for when data doesn't exist.
    const loading = () => {
      return <h1>Loading...</h1>;
    };
  
  return profileData ? loaded() : loading();  
}

