import react,{useEffect,useState}from 'react'
import NavBar from '../components/Common/NavBar'
import TransactionChart from '../components/Chart/TransChart';
import Profile from '../components/Common/Profile';
import ModalForm from '../components/Modals/ModalForm';
import factory from '../utilities/factory.js'
import { VscCalendar } from 'react-icons/vsc';

import {Bucket, Transaction} from '../utilities/categories.js'

export default function Dashboard(){
    //States we need to manage is the change in bucket and the change in accounts
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedBucket,setSelectedBucket] = useState(''); 
    
    const [accounts, setAccounts] = useState([]);
    const [buckets, setBuckets] = useState([]);
    const [transactions, setTransactions] = useState([]);


    const [data, setData] = useState(null); 


    //Fetch Accounts only runs one mount
    useEffect(()=> {
        const fetchAccounts = async () => {
            try {
                const user = await fetch('https://budgetapp-vdsp.onrender.com/api/users?fields=accounts').then(data => data.json());
                setAccounts(user[0].accounts); //Select the first user's accounts
                setSelectedAccount(user[0].accounts[0]); //Set the selected account to 
            } catch (e) {
                console.error(e);
            }
        };
        fetchAccounts();
        console.log("Page is mounted");
    }, []); 

    useEffect(()=>{
        if(selectedAccount) {
            const fetchBuckets = async() => {
                try {
                    const buckets = await fetch(`https://budgetapp-vdsp.onrender.com/api/transactions/${selectedAccount}`)
                                        .then(data => data.json());                 
                    setBuckets(buckets);
                    const bucket = buckets[0];
                    setSelectedBucket(bucket._id); //Change we want to allow the user to select and bucket
                    //const formatedBucket = factory.FormatDataToMatchClass(Bucket,{date: bucket.start_date, amount: })
                    setTransactions(bucket.transactions.map(element => factory.FormatDataToMatchClass(Transaction, element)))
                } catch(e) {
                    console.error(e);
                }
            };
            fetchBuckets();
        }
    }, [selectedAccount]);

    useEffect(() => {
        if(buckets.length > 0 && selectedBucket){
            let result = findBucket();
            if (result.length > 0 ){
                console.log(result);
                calculateDate(result[0])
            }
        }
    }, [buckets,selectedBucket])

    const findBucket = () => {
        return buckets.filter(bucket => bucket._id === selectedBucket);
    }

    function calculateDate (obj) {
        const start = new Date(obj.start_date.substring(0,10)); 
        //console.log(start.toLocaleDateString()); //Returns the M/D`/YYYY format
        const end = new Date(obj.end_date.substring(0,10));
    }

    //Data we need accounts (number, bucket) transaction buckets of those account 
    return( 
    <>
            <pre>{JSON.stringify(selectedAccount, null, 2)}</pre> {/* JSON stringify to display object */}
            <pre>{JSON.stringify(selectedBucket, null, 2)}</pre> {/* Display bucket id if it's an object */}
            <div>
                <h3>Accounts Menu</h3>
                <select onChange={(e) => setSelectedAccount(e.target.value)} value={selectedAccount}>
                    {
                        accounts.map(account => (
                            <option key={account} value={account}>
                                {account}
                            </option>
                        ))}
                </select>
            </div>
            <div>
                <h2>Bucket Menu</h2>
                <select onChange={(e) => setSelectedBucket(e.target.value)} value={selectedBucket}>
                    {buckets && buckets.map(bucket => (
                        <option key={bucket._id} value={bucket._id}>
                            {bucket._id}
                        </option>
                    ))}
                </select>
            </div>
            <section style={{
                display: 'flex',
                flex:1, 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',  // Ensures full viewport height
                textAlign: 'center' // Centers text horizontally inside the section
            }}>
                <h1>Transaction Insights</h1>
                <TransactionChart datas={transactions}/>
                <h1>History</h1>
                <p>Timeframe Between 1/29 to 1/102</p>
            </section>

        {/* <pre>{JSON.stringify(profileData,null,2)}</pre>
        <NavBar/>
        //Todo: Preformatted Text
        <div style={{display:'flex'}}>
            <section style={{width:'20%',border:"solid"}}>
                <Profile renderStyle={'profile_small'} data={{src:"src/assets/sfa3-akuma2.jpg", alt:"Akuma Picture"}}/>
                <section style={{backgroundColor:'red', height:'30%', position:'relative', top:'6rem'}}>
                    hello
                </section>
                <section style={{backgroundColor:'blue', height:'30%', position:'relative', top:'10rem'}}>
                    hello
                </section>
            </section>
            <section style={{
                display: 'flex',
                flex:1, 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',  // Ensures full viewport height
                textAlign: 'center' // Centers text horizontally inside the section
            }}>
                <h1>Transaction Insights</h1>
                <TransactionChart/>
                <h1>History</h1>
                <p>Timeframe Between 1/29 to 1/102</p>
            </section>
        </div>    
        <ModalForm/> */}
    </>
    );
}