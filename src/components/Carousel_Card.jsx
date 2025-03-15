import {useContext} from 'react';
import { TransactionContext } from '../pages/Dashboard';

import classes from './CarouselCard.module.css'
export default function CarouselCard()
{
    const bucket = useContext(TransactionContext);
    return (
            <> 
                {bucket && bucket.transactions.map((element, index)=> 
                <div key={index} className={classes.container}>
                    <div className={classes.title}>
                        <span>W</span>
                        <p>{element.comp_name}</p>
                    </div>
                    <div className={classes.body}>
                        <p>${element.amount}</p>
                        <p>(15%)</p>     
                    </div>
                </div>                

                )}
                {!bucket && <h1>There are no transactions yet</h1>}
            </>
                 
    );
}
