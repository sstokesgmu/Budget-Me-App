import react from 'react';
import './textCard.scss'

const Types = {
    BASIC: "card_basic", 
    BASIC_SLIM: "card_basic_slim",
    BASIC_BUTTON:"card_button",
    BASIC_LINK:"card_link",
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
export default function TextCard({renderStyle, data,}){
    return (<section className={renderStyle}>
        {selectCard(renderStyle,data)}
    </section>)
}

function selectCard(style,data){
    switch(style){
        case Types.BASIC:
            return <div className="contents">
                        <h1 className="card-title">{data.name}</h1>
                        <div className="card-body">
                            <h1>${data.total}.00</h1>
                            <h2>Total Number of Accounts Tracked: 1</h2>
                        </div>
                    </div>
        case Types.BASIC_SLIM:
            return  <>
                        <h2>123</h2>
                        <div className="box">
                            <div>Savings</div>
                            <div>1000000000</div>
                            <div>Icon</div>
                        </div>
                        
                    </>
        default:
            return null;
    }
}
