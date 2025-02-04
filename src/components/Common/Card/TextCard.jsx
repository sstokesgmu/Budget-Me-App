import './textCard.scss'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import react,{useState} from 'react';

import ModalForm from '../../Modals/ModalForm';
import { GiConsoleController } from 'react-icons/gi';
import { HiNewspaper } from 'react-icons/hi';
import { SiQwant } from 'react-icons/si';


const Types = {
    BASIC: "card_basic", 
    BASIC_SLIM: "card_basic_slim",
    BUTTON_SLIM:"card_button_slim",
    // TEXT_LINK:"card_link",
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

    static buttonSlim(data,interactions){
        const {openModal,closeModal} = interactions;
        return (
        <>
            <h2>{data.account_num}</h2>
            <div className="box">
                <div className="type">{data.type??"undefined"}</div>
                <div className="number">${data.current??0}</div>
                <div className="iconContainer">
                    <CiCirclePlus style={{color:'green'}} onClick={openModal}/>
                    <CiCircleMinus style={{color:'red'}} onClick={closeModal}/>
                </div>
            </div>
        </>)
    }
}

export class Account {
    constructor({account_num,type,date_opened,date_closed,starting_amount,current_amount}){
        this.account_num=account_num, this.type=type,this.dateOpen=date_opened,
        this.dateClosed=date_closed, this.start=starting_amount, this.current=current_amount
    }
}


let dictionary = new Map();
dictionary.set(Types.BASIC,[]);
dictionary.get(Types.BASIC).push({class: undefined, func: TextCardLookup.basic}
    , {class: Account, func: TextCardLookup.basicAccount}
);

dictionary.set(Types.BASIC_SLIM,[]);
dictionary.get(Types.BASIC_SLIM).push({class:undefined, func:TextCardLookup.basicSlim},
    {class:Account, func:TextCardLookup.basicSlimAccount}
);


// dictionary.set(Types.BUTTON_SLIM, []);
// dictionary.get(Types.BUTTON_SLIM).push(Account);


function FindComponentFunc(array,data){
    //We are trying to find if the data matches a certain class passed in from the array 
    let b = array.filter((element)=>{
        if(typeof element.class === 'function') {
            return data instanceof element.class; //A component with class data
        }
        return false; 
    });

    //If the data doesn't match any class instance then we know the component will have template data
    if(b.length === 0) 
        return array[0].func;

    //Else: then the fitler found a match, data being and instance of class  
     b = b[0]; 
     const {func:componentFunc} = b;
     return(componentFunc);
}

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (<section className={style}>
        {selectCard(style,data, {openModal, closeModal})}
        {/* {isModalOpen ? <ModalForm closeModal={closeModal} /> : null} */}
    </section>)
}

function selectCard(style,data, interactions = undefined){
    let classElements;
    let handleReturn;
    switch(style){
        case Types.BASIC:
              handleReturn = FindComponentFunc(dictionary.get(Types.BASIC),data);
                    return handleReturn(data);
        case Types.BASIC_SLIM:
            handleReturn = FindComponentFunc(dictionary.get(Types.BASIC_SLIM),data);
                return handleReturn(data);
        // case Types.BUTTON_SLIM:
        //     handleReturn = FindComponentFunc(dictionary.get(Types.BUTTON_SLIM),data);
        //         return handleReturn(data);
        default:
            return null;
    }
}
