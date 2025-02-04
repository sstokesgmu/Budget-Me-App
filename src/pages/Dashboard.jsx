import react from 'react'
import NavBar from '../components/Common/NavBar'
import TransactionChart from '../components/Chart/TransChart';
import ModalForm from '../components/Modals/ModalForm';

export default function Dashboard(){


    //Data we need accounts (number, bucket) transaction buckets of those account 
    return( 
    <>
        {/* <pre>{JSON.stringify(profileData,null,2)}</pre> */}
        <NavBar/>
        <div style={{display:'flex'}}>
            <section style={{width:'20%',border:"solid"}}>
                {/* <Card renderStyle={"card-profile-small"} data={{src:"src/assets/sfa3-ken2.jpg", alt:"Ken Picture"}}/> */}
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
        <ModalForm/>
    </>
    );
}