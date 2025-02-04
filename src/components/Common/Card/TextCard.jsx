import react from 'react';
import './textCard.scss'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

const Types = {
    BASIC: "card_basic", 
    BASIC_SLIM: "card_basic_slim",
    BUTTON_SLIM:"card_button_slim",
    // TEXT_LINK:"card_link",
}

export class Account {
    constructor({account_num,type,date_opened,date_closed,starting_amount,current_amount}){
        this.account_num=account_num, this.type=type,this.dateOpen=date_opened,
        this.dateClosed=date_closed, this.start=starting_amount, this.current=current_amount
    }
}


let dictionary = new Map();
dictionary.set(Types.BASIC,[]);
dictionary.get(Types.BASIC).push(Account);
dictionary.set(Types.BASIC_SLIM,[]);
dictionary.get(Types.BASIC_SLIM).push(Account);
dictionary.set(Types.BUTTON_SLIM, []);
dictionary.get(Types.BUTTON_SLIM).push(Account);

/**
 * Types:
 *   BASIC: "card_basic", 
 *   BASIC_SLIM: "card_basic_slim",
 *   BASIC_BUTTON:"card_button",
 *   BASIC_LINK:"card_link",
 * @param {*} param0 
 * @returns 
 */
export default function TextCard({style, data,}){
    return (<section className={style}>
        {selectCard(style,data)}
    </section>)
}

function selectCard(style,data){
    let classElements;
    switch(style){
        case Types.BASIC:
             classElements = dictionary.get(Types.BASIC);
            for (let i = 0; i < classElements.length; i++){
                if(data instanceof Account)
                    return TextCardLookup.basicAccount(data);
                //... Add more classes
                else
                    return TextCardLookup.basic(data);
            }
        case Types.BASIC_SLIM:
            classElements = dictionary.get(Types.BASIC_SLIM);
            for(let i = 0; i < classElements.length; i++){
                if(data instanceof Account) 
                    return TextCardLookup.basicSlimAccount(data);                   
                else 
                    return TextCardLookup.basicSlim(data);
            }
        case Types.BUTTON_SLIM:
            classElements = dictionary.get(Types.BUTTON_SLIM)
            for(let i = 0; i <classElements.length; i++){
                if(data instanceof Account)
                    return TextCardLookup.buttonSlim(data)
            }
        default:
            return null;
    }
}
class TextCardLookup {
    static basic(data){
        return(<div className="contents">
            <h1 className="card-title">{data.name}</h1>
            <div className="card-body">
                <h1>${data.total}.00</h1>
                <h2>Total Number of Accounts Tracked: {data.numberofAccounts}</h2>
            </div>
        </div>);
    }
    static basicAccount(data){

    }

    static basicSlim(data){
        return(
            <>
                <h2>123</h2>
                <div className="box">
                    <div>Savings</div>
                    <div>1000000000</div>
                    <div>Icon</div>
                </div>
            </>
        );
    }
    static basicSlimAccount(data){
       return( <>
            <h2>{data.account_num}</h2>
            <div className="box">
                <div className="type">{data.type??"undefined"}</div>
                <div className="number">${data.current??0}</div>
            </div>
        </>);
    }

    static buttonSlim(data){
        return (
        <>
            <h2>{data.account_num}</h2>
            <div className="box">
                <div className="type">{data.type??"undefined"}</div>
                <div className="number">${data.current??0}</div>
                <div className="iconContainer">
                    <CiCirclePlus style={{color:'green'}}/>
                    <CiCircleMinus style={{color:'red'}}/>
                </div>
            </div>
        </>)
    }
}