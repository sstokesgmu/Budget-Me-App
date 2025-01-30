import react from 'react'; 
import Profile from '../components/Common/Profile'
import NavBar from '../components/Common/NavBar';
import Table from '../components/Common/Table';
import Card from '../components/Common/Card';


import {useState, useEffect} from 'react';
export default function UserPage() {

    const [profileData, setData] = useState(null);

    const getData = async () => {
        try {
        
            const [userUnformatted, accountData] = await Promise.all([
                fetch('http://192.168.1.162:8080/api/users').then(data => data.json()),
                fetch(`http://192.168.1.162:8080/api/accounts`).then(data => data.json()),
            ])
            
            const userData = userUnformatted[0];
            setData({userData, accountData});
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    // loaded function for when data is fetched.
    const loaded = () => {
      return (
        <>
          <pre>{JSON.stringify(profileData,null,2)}</pre>
          <h1>{profileData.userData.name}</h1>
          {/*Card container*/}
          <section style={{display:"flex",gap:"30px"}}>
              <Card renderStyle={"card-horiz-01"} data={{name:profileData.userData.name, total:1000}}/>
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

