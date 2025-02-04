import './textCard.scss'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import react,{useState} from 'react';

import ModalForm from '../../Modals/ModalForm';

import Library from '../../../utilities/Library';
import {Account} from '../../../utilities/categories';


const Types = {
    BASIC: "card_basic", 
    BASIC_SLIM: "card_basic_slim",
    BUTTON_SLIM:"card_button_slim",
    // TEXT_LINK:"card_link",
}

class TextCardLibrary extends Library{

    static MatchDataToComponent(Types,data){
       return super.MatchDataToComponent(Types,data);
    };

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


let dictionary = new Map();
dictionary.set(Types.BASIC,[]);
dictionary.get(Types.BASIC).push({class: undefined, func: TextCardLibrary.basic}
    , {class: Account, func: TextCardLibrary.basicAccount}
);

dictionary.set(Types.BASIC_SLIM,[]);
dictionary.get(Types.BASIC_SLIM).push({class:undefined, func:TextCardLibrary.basicSlim},
    {class:Account, func:TextCardLibrary.basicSlimAccount}
);

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
    let handleReturn;
    switch(style){
        case Types.BASIC:
              handleReturn = TextCardLibrary.MatchDataToComponent(dictionary.get(Types.BASIC),data); 
                    return handleReturn(data);
        case Types.BASIC_SLIM:
            handleReturn = TextCardLibrary.MatchDataToComponent(dictionary.get(Types.BASIC_SLIM),data);
                return handleReturn(data);
        default:
            return null;
    }
}
