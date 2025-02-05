import react,{useEffect,useState}from 'react'
import NavBar from '../components/Common/NavBar'
import TransactionChart from '../components/Chart/TransChart';
import Profile from '../components/Common/Profile';
import ModalForm from '../components/Modals/ModalForm';

export default function Dashboard(){
    //States we need to manage is the change in bucket and the change in accounts
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedBucket,setSelectedBucket] = useState({}); 

    
    const [accounts, setAccounts] = useState([]);
    const [buckets, setBuckets] = useState(null);
    const [data, setData] = useState(null); 


    const mount = async() => {
        try{    
            const user = await fetch('https://budgetapp-vdsp.onrender.com/api/users?fields=accounts')
                                    .then(data => data.json());
            const accounts = user[0].accounts;
            const buckets = await fetch(`https://budgetapp-vdsp.onrender.com/api/transactions/${accounts[0]}`).then(data => data.json());
            //we'regetting the first of the return
        
            //save all possiblities to state
            setAccounts(accounts);
            setBuckets(buckets);

            setSelectedAccount(accounts[0]);
            setSelectedBucket(bucket[0]._id);

        } catch(e){
            console.error("Error fetching data");
        }
    }
    useEffect(()=>{
        mount();
        console.log('The page is mounted');
    },[]);





    useEffect(()=>{
        //Get 
    },[selectedAccount]);
    // useEffect(()=>{

    // },[selectedBucket])



    // useEffect(() => {})

        console.log(buckets)
        console.log(accounts);


    //Data we need accounts (number, bucket) transaction buckets of those account 
    return( 
    <>
            <pre>{JSON.stringify(selectedAccount, null, 2)}</pre> {/* JSON stringify to display object */}
            <pre>{JSON.stringify(selectedBucket, null, 2)}</pre> {/* Display bucket id if it's an object */}
            <div>
                <h3>Accounts Menu</h3>
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

            
            <div>
                <h3>BucketMenu</h3>
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>


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