import react,{useEffect,useState}from 'react'
import NavBar from '../components/Common/NavBar'
import TransactionChart from '../components/Chart/TransChart';
import Profile from '../components/Common/Profile';
import ModalForm from '../components/Modals/ModalForm';
import ComponentFactory from '../utilities/factory.js'
import {Bucket, Transaction, AccountOPS} from '../utilities/categories.js'


import TextCard from '../components/Common/Card/TextCard.jsx';


export default function Dashboard(){
    //States we need to manage is the change in bucket and the change in accounts
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedBucket,setSelectedBucket] = useState(null); 
    
    const [accounts, setAccounts] = useState([]);
    const [buckets, setBuckets] = useState([]);
    // const [transactions, setTransactions] = useState([]);




    //Fetch Accounts only runs one mount
    useEffect(()=> {
        const fetchAccounts = async () => {
            try {
                const user = await fetch('https://budgetapp-vdsp.onrender.com/api/users?fields=accounts').then(data => data.json());
                // setAccounts(user[0].accounts); //Select the first user's accounts
                let result = await fetch('https://budgetapp-vdsp.onrender.com/api/accounts').then(data => data.json());
                const accountWithOps = result.map(element => ComponentFactory.FormatDataToMatchClass(AccountOPS,element));
                setAccounts(accountWithOps); //Cache out objects 
                setSelectedAccount(accountWithOps[0].number); //Set the selected account to
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
                    //Returns the buckets tied to a specific account from newest to oldest
                    let result = await fetch(`https://budgetapp-vdsp.onrender.com/api/transactions/${selectedAccount}`).then(data => data.json());                 
                    
                    //Format the data to be an instance of the bucket class
                    result = result.map((bucket,index ) => {
                        // give the bucket a name
                        bucket.name = `Bucket: ${index + 1}`;
                        return ComponentFactory.FormatDataToMatchClass(Bucket,bucket);
                    })
                    setBuckets(result);
                    setSelectedBucket(result[0]) //Grab









                    // //const formatedBucket = factory.FormatDataToMatchClass(Bucket,{date: bucket.start_date, amount: })
                    // setTransactions(bucket.transactions.map(element => factory.FormatDataToMatchClass(Transaction, element)))

                    // for(let i = 0, balance = 40000; i <  transactions.length; i++) {
                    //     console.log(balance -= transactions[i].amount);
                    // }
                } catch(e) {
                    console.error(e);
                }
            };
            fetchBuckets();
        }
    }, [selectedAccount]);




    const handleBucketChange = (e) =>{
        e.preventDefault();
        const result = buckets.filter((element) =>  element.id === e.target.value);
        setSelectedBucket(result[0]);
   }


    // const findBucket = () => {
    //     return buckets.filter(bucket => bucket.id === selectedBucket.id);
    // }

    // function calculateDate (obj) {
    //     const start = new Date(obj.start_date.substring(0,10)); 
    //     //console.log(start.toLocaleDateString()); //Returns the M/D`/YYYY format
    //     const end = new Date(obj.end_date.substring(0,10));
    // }


    //Data we need accounts (number, bucket) transaction buckets of those account 
    const loaded = () => {
    return( 
    <>
            <NavBar/>
            <pre>{JSON.stringify(selectedAccount, null, 2)}</pre> {/* JSON stringify to display object */}
            <pre>{selectedBucket ? JSON.stringify(selectedBucket.id, null, 2) : "No bucket selected"}</pre>
            <div style={{display:'flex'}}>
            <section style={{width:'20%',border:"solid"}}>
                <Profile renderStyle={'profile_small'} data={{src:"src/assets/sfa3-akuma2.jpg", alt:"Akuma Picture"}}/>
                <section style={{backgroundColor:'', height:'30%', position:'relative', top:'6rem'}}>
                <div>
                <h3>Accounts Menu</h3>
                <select onChange={(e) => setSelectedAccount(e.target.value)} value={selectedAccount}>
                    {
                        //Loop through the account objs and render a option
                        accounts.map((account,index) => {
                            return (
                                <option key={index} value={account.number}>
                                    {account.number}
                                </option>
                            )
                        })}
                </select>
            </div>         
                </section>
                <section style={{backgroundColor:'blue', height:'30%', position:'relative', top:'10rem'}}>
                    
                <div>
                    <h2>Bucket Menu</h2>
                    <select onChange={handleBucketChange} value={selectedBucket.id}>
                        {/*If the bucket exist then run the operation*/}
                        {buckets && buckets.map((bucket,index) => {
                            return(<option key={index + 1} value={bucket.id}>
                                {bucket.name}
                            </option>)
                    })}
                    </select>
                </div>
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
            </section>
        </div> 
            <section style={{
                display: 'flex',
                flex:1, 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',  // Ensures full viewport height
                textAlign: 'center' // Centers text horizontally inside the section>
            }}>
                <h1>History</h1>
                <p>{`Timeframe between ${selectedBucket.start_date} and ${selectedBucket.end_date} `}</p>
                {console.log(selectedBucket)}
               {selectedBucket.transactions && ComponentFactory.BuidlComponents(selectedBucket.transactions, 5, TextCard,"card_basic_slim")}        
            </section>
        {/* <pre>{JSON.stringify(profileData,null,2)}</pre>
        <NavBar/>
        //Todo: Preformatted Text
       
        <ModalForm/> */}
    </>)};
    const loading = () => {return <h1>Loading ... </h1>}
    return selectedBucket ? loaded() : loading();
}