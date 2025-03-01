//libraries
import {useState} from 'react';

//styles
import classes from './Debrief.module.css'


//sources
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
//https://www.calculatorsoup.com/calculators/algebra/percentage-increase-calculator.php
//https://www.calculatorsoup.com/calculators/algebra/percentage-decrease-calculator.php
//https://www.appinspo.com/unifiedhr-withdraw-app-2

const formatter  = new Intl.NumberFormat('en-Us', 
    {style: 'currency', currency:'USD', minimumFractionDigits:0, maximumFractionDigits:2,}
)

const PERCENTAGE_CHANGE = {INCREASE: 'increase',DECREASE: 'decrease', NO_CHANGE:'no change'}

function percentageChange(start, current){
    let percentage= {change:PERCENTAGE_CHANGE.NO_CHANGE, amount:0}
    //TODO: Throw an error if the values aren't numbers
    if(current > start) //percentage increase
    {
        percentage.change = PERCENTAGE_CHANGE.INCREASE;
        percentage.amount= ((current - start)/ Math.abs(start)) * 100;
    }
    else if(current < start ) //percentage decrease
    {
        percentage.change = PERCENTAGE_CHANGE.DECREASE;
        percentage.amount = ((start - current)/Math.abs(start)) * 100;
    }
    return percentage;
}
//Amount will be of type string
export default function Debrief({amount}){


    const starting_amount = 45;
    const percentage = percentageChange(starting_amount, 10)
    console.log(percentage);
    //fsor each character return a span insert '$' at the start of the string 
    let a = (formatter.format(amount ?? 0)).split('');

    return <section className={classes.card} >
                        <div> {/*Debrief-show account information */}
                            <h5>Total Balance</h5>
                            <section className={classes.amount_heading} >  
                                {a.map((char,index) => <span key={index}>{char}</span>)}
                            </section>
                            <div className={classes.footer}>
                                <p>
                                    {percentage.change === PERCENTAGE_CHANGE.NO_CHANGE &&
                                        <span style={{marginRight:'10px'}}>{percentage.amount}%</span>
                                    }
                                    {percentage.change === PERCENTAGE_CHANGE.INCREASE &&
                                        <span style={{marginRight:'10px',color:'green'}}>{percentage.amount.toFixed(2)}%</span>
                                    }
                                    {percentage.change === PERCENTAGE_CHANGE.DECREASE &&
                                        <span style={{marginRight:'10px', color:'red'}}>{percentage.amount.toFixed(2)}%</span>
                                    }
                                    

                                     Return
                                </p>
                                <p>3/1/2025</p>
                            </div>
                            
                        </div>
                </section>
}