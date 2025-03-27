// Libraries
import { useState, StrictMode } from 'react';
//Styles
//Utilities
import { USER_SEED, ACCOUNTS_SEED, TRANSACTION_SEED } from '../utilities/seed';
import { percentageChange, } from '../utilities/Math';
//Components
import Debrief from '../components/Debrief';
import LineChart_Budget from '../components/LineChart';
import Carousel from '../components/Carousel';
import CarouselCard from '../components/Carousel_Card';
import CarouselLabel from '../components/Carousel_Label';
const { name, accounts } = USER_SEED[0];
const user = { name, accounts };
//export const TransactionContext = createContext(null);
function searchForAccount(number) {
    const { account_num, type, date_opened, date_closed, starting_amount, current_amount, bucket } = ACCOUNTS_SEED.find(account => account.account_num == number);
    return { account_num, type, date_opened, date_closed, starting_amount, current_amount, bucket };
}
function searchForTransaction(id) {
    const obj = TRANSACTION_SEED.find(element => element._id == id);
    if (!obj)
        return null;
    const { _id, start_date, end_date, transactions } = obj;
    return { id: _id, start_date, end_date, transactions };
}
export default function Dashboard() {
    //!When React triggers a re-render (because of a state change, for example), it will re-run the return statement of your component. 
    const [account, setAccount] = useState(searchForAccount(user.accounts[0]));
    //!Warning might cause side effects: is the account varaible during this state render 
    //conditional check inside the initializer
    const [bucket, setBucket] = useState(account.bucket && account.bucket.length > 0 ? searchForTransaction(account.bucket[0]) : null);
    const [selectedBucket, setSelectedBucket] = useState(null); // Track selected bucket
    function handleAccountChange(value) {
        const newAccount = searchForAccount(value);
        setAccount(newAccount);
        //TODO: create a useEffect function to watch for account changes.
        setBucket(newAccount.bucket && newAccount.bucket.length > 0 ? searchForTransaction(newAccount.bucket[0]) : null);
    }
    function handleBucketChange(value) {
        // Update the selected bucket when a new one is clicked
        setSelectedBucket(value); // Update selected bucket
        setBucket(searchForTransaction(value)); // Set bucket details based on the selected one
    }
    return (<StrictMode>
        <span>
            <h1>{user.name}</h1>
            <section style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '50px', flexDirection: 'column' }}>
                <div style={{ position: 'relative', left: '70px', }}>
                    <Debrief accountName={account.account_num} percentage={percentageChange(account.starting_amount, account.current_amount)} totalAmount={account.current_amount} passUpFunc={(value) => handleAccountChange(value)} dropdownConfig={{ options: user.accounts, func: (value) => handleAccountChange(value) }}/>          
                </div>
                <section>
                    {bucket && <Carousel array={account.bucket} component={CarouselLabel} options={{
                selectedBucket,
                func: (e) => handleBucketChange(e)
            }}/>}
                </section>
                <div style={{ display: 'flex', marginTop: '0px' }}>
                    {/* Left component (Debrief) takes up 30% */}
                    {/* percentage,totalAmount,currentAmount */}
                     <LineChart_Budget bucket={bucket} account={account}/>
                    {/* Right component (BarGraph_Budget) takes up 70% */}
                </div>
            </section>
            <section>
                    {bucket && <Carousel array={bucket.transactions} component={CarouselCard}/>}
                    {!bucket && <h1>No Transaction on this bucket</h1>}
            </section>
        </span>
        <br></br>
        <br></br>
        <br></br>
        <footer>
            Footnote
        </footer>
        </StrictMode>);
}
