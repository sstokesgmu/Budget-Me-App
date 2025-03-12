//libraries
import {useState} from 'react';

//styles
import classes from './Debrief.module.css'

//utilities
import {PERCENTAGE_CHANGE_INTERFACE, FORMATTER} from '../utilities/Math'

//props percentage change, current amount, change amount 
export default function Debrief({percentage,totalAmount,currentAmount}){

    //fsor each character return a span insert '$' at the start of the string 
    let digitContainer = (FORMATTER.format( totalAmount?? 0)).split('');

    return <section className={classes.card} >
                        <div> {/*Debrief-show account information */}
                            <h5>Total Balance</h5>
                            <section className={classes.amount_heading} >  
                                {digitContainer.map((char,index) => <span key={index}>{char}</span>)}
                            </section>
                            <div className={classes.footer}>
                                <p>
                                    {percentage.change === PERCENTAGE_CHANGE_INTERFACE.NO_CHANGE &&
                                        <span style={{marginRight:'10px'}}>{percentage.amount}%</span>
                                    }
                                    {percentage.change === PERCENTAGE_CHANGE_INTERFACE.INCREASE &&
                                        <span style={{marginRight:'10px',color:'green'}}>{percentage.amount.toFixed(2)}%</span>
                                    }
                                    {percentage.change === PERCENTAGE_CHANGE_INTERFACE.DECREASE &&
                                        <span style={{marginRight:'10px', color:'red'}}>{percentage.amount.toFixed(2)}%</span>
                                    }
                                     Return
                                </p>
                                <p>3/1/2025</p>
                            </div>
                            
                        </div>
                </section>
}