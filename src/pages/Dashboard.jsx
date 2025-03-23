// Libraries
import {useEffect,useState, createContext,StrictMode}from 'react'

//Styles

//Utilities
import {USER_SEED,ACCOUNTS_SEED,TRANSACTION_SEED} from '../utilities/seed'
import {percentageChange,} from '../utilities/Math'
//Components
import Debrief from '../components/Debrief';
import SearchableDropdown from '../components/SearchableDropdown';
import LineChart_Budget from '../components/LineChart';
import Carousel from '../components/Carousel';

const {name, accounts} = USER_SEED[0];
const user = {name, accounts}

export const TransactionContext = createContext(null);

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
    const [bucket, setBucket] = useState(account.bucket && account.bucket.length > 0 ? searchForTransaction(account.bucket[0]) : null);
    

    
    
    function handleAccountChange(value){
        const newAccount = searchForAccount(value);
        setAccount(newAccount);
        //TODO: create a useEffect function to watch for account changes.
        setBucket(newAccount.bucket && newAccount.bucket.length > 0 ? searchForTransaction(newAccount.bucket[0]) : null)
    }
    function handleBucketChange(event){setBucket(searchForTransaction(event.target.value));} 

    return( 
        <StrictMode>
        <span>
            <h1>{user.name}</h1>
            <section style={{display: 'flex', justifyContent: 'center', width: '100%',  marginTop: '50px', flexDirection:'column'}}>
                <div style={{position:'relative', left: '70px',}}>
                    <Debrief 
                    accountName={account.account_num}
                    percentage={percentageChange(account.starting_amount, account.current_amount)} 
                    totalAmount={account.current_amount}
                    passUpFunc = {(value) => handleAccountChange(value)}
                    dropdownConfig={{options:user.accounts, func:(value) => handleAccountChange(value)}}
                    />                
                </div>
                <div style={{display: 'flex', marginTop: '0px'}}>
                    {/* Left component (Debrief) takes up 30% */}
                    {/* percentage,totalAmount,currentAmount */}
                     <LineChart_Budget bucket={bucket} account={account}/>
                    {/* Right component (BarGraph_Budget) takes up 70% */}
                </div>
            </section>
            <section>
                <h1>Account 123's Transaction Total Amount: $0.00</h1>
                <TransactionContext.Provider value={bucket}>
                    <Carousel/> 
                </TransactionContext.Provider>
            </section>
        </span>
        </StrictMode>
    );
}

{/* 
<div
                                        style={{
                                        width: '300px',
                                        height: 'auto',  // Allow height to grow based on content
                                        backgroundColor: 'white',  // Change background to white for card style
                                        position: 'relative',
                                        bottom: 130,
                                        left: 400,
                                        borderRadius: '10px',  // Rounded corners for a card look
                                        padding: '20px',  // Add some padding
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',  // Space between elements
                                        }}
                                    >
                                        <select
                                        name='accounts'
                                        onChange={handleAccountChange}
                                        style={{
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '1px solid #ddd',  // Light border
                                            fontSize: '14px',
                                        }}
                                        >
                                        {user.accounts.map(account => (
                                            <option key={account} value={account}>
                                            {account}
                                            </option>
                                        ))}
                                        </select>

                                        {/* <select
                                        name='buckets'
                                        onChange={handleBucketChange}
                                        style={{
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '1px solid #ddd',  // Light border
                                            fontSize: '14px',
                                        }}
                                        >
                                        {account.bucket &&
                                            account.bucket.map((element, index) => (
                                            <option key={element} value={element}>
                                                {`Bucket ${index + 1}`}
                                            </option>
                                            ))}
                                        </select> */}
                                    {/* </div>
                                    )} */} 