// Libraries
import {useEffect,useState, StrictMode}from 'react'

//Styles

//Utilities
import {USER_SEED,ACCOUNTS_SEED,TRANSACTION_SEED} from '../utilities/seed'
import {percentageChange,} from '../utilities/Math'
//Components
import Debrief from '../components/Debrief';
import LineChart_Budget from '../components/LineChart';
import Carousel from '../components/Carousel';

const {name, accounts} = USER_SEED[0];
const user = {name, accounts}

function searchForAccount(number){
    const {account_num,type,date_opened,date_closed,starting_amount,current_amount,bucket} = ACCOUNTS_SEED.find(account =>  account.account_num == number)
    return {account_num,type,date_opened,date_closed,starting_amount,current_amount,bucket} 
}

function searchForTransaction(id){
    const obj = TRANSACTION_SEED.find(element => element._id == id)
    if(!obj)
        return null;

    const {_id, start_date, end_date, transactions} = obj
    return {id:_id, start_date,end_date,transactions}
}

export default function Dashboard(){
    //!When React triggers a re-render (because of a state change, for example), it will re-run the return statement of your component. 
    const [account, setAccount] = useState(searchForAccount(user.accounts[0]));
    //!Warning might cause side effects: is the account varaible during this state render 

    //conditional check inside the initializer
    //account.bucket && account.bucket.length > 0 ? searchForTransaction(account.bucket[0]) : null
    const [bucket, setBucket] = useState(account.bucket && account.bucket.length > 0 ? searchForTransaction(account.bucket[0]) : null);
    
    function handleAccountChange(event){
        console.log(event.target.value);
        const newAccount = searchForAccount(event.target.value);
        setAccount(newAccount);
        //TODO: create a useEffect function to watch for account changes.
        setBucket(newAccount.bucket && newAccount.bucket.length > 0 ? searchForTransaction(newAccount.bucket[0]) : null)
    }
    function handleBucketChange(event){setBucket(searchForTransaction(event.target.value));} 
    return( 
        <StrictMode>
        <span>
            <h1>{user.name}</h1>
            <select name='accounts'  onChange={handleAccountChange}>
                {user.accounts.map(account => <option key={account} value={account}>{account}</option>)}
            </select>
            <select name='buckets' onChange={handleBucketChange}>
                {account.bucket && account.bucket.map((element,index) => <option key={element} value={element}>{`Bucket ${index + 1}`}</option>)}
            </select>
            <p>The current account selected is {account.account_num}</p>
            <pre>{JSON.stringify(account)}</pre>
            <p>{account.bucket.length > 0 ? `The current bucket selected is ${bucket.id}`: `The account has no bucket`}</p>
            <pre>{account.bucket && JSON.stringify(bucket)}</pre>
            {/* <h1>Side Bar</h1> The navigation bar can be the sidebar */}
             {/* <h1>Side Bar</h1> The navigation bar can be the sidebar */}
            <section style={{display: 'flex', justifyContent: 'center', width: '100%',  marginTop: '50px'}}>
                <div style={{display: 'flex', justifyContent: 'center', gap: '10px', width: '80%'}}>
                    {/* Left component (Debrief) takes up 30% */}
                    {/* percentage,totalAmount,currentAmount */}
                    <div style={{flex: '0 0 20%', marginRight: '20px'}}>
                        <Debrief 
                        percentage=
                        {percentageChange(account.starting_amount, account.current_amount)} 
                        totalAmount={account.current_amount}/>
                    </div>

                    {/* Right component (BarGraph_Budget) takes up 70% */}
                    <div style={{flex: '0 0 80%',  height:'500px', marginLeft: '20px'}}>
                        <LineChart_Budget bucket={bucket} account={account}/>
                    </div>
                </div>
            </section>
            <section>
                <h1>Account 123's Transaction Total Amount: $0.00</h1>
                <Carousel/> 
            </section>
        </span>
        </StrictMode>
    );
}
