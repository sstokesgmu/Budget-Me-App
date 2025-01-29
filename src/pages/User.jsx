import react from 'react'; 
import Profile from '../components/Common/Profile'
import NavBar from '../components/Common/NavBar';
import Table from '../components/Common/Table';


import {useState, useEffect} from 'react';
export default function UserPage() {

    const [profileData, setData] = useState('null');

    const getData = async () => {
        try {
            const [userData, accountData] = await Promise.all([
                fetch('http://localhost:8080/api/users').then(data => data.json()),
                fetch(`http://localhost:8080/api/accounts`).then(data => data.json()),
            ])
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
      </>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

    return profileData ? loaded() : loading();
}

