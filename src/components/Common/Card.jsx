import react from 'react'
import Profile from './Profile'
import './card.scss'

/*
    Possible Card Styles

    card-horiz-01

*/

export default function Card({renderStyle, data,}) {
    return (
        <section className={renderStyle}>
           {selectCardStyle(renderStyle,data)}
        </section>
    ); 
}

   
function selectCardStyle(style,data){
    switch(style){
        case "card-horiz-01":
            return(
                <div className="contents">
                    <h1 className="card-title">{data.name}</h1>
                    <div className="card-body">
                        <h2>Total Balance</h2>
                        <h3>{data.total}</h3>
                    </div>
                </div>
            );
        case "card-profile": 
            return (
                <div className="contents">
                    <img src={data.src} alt={data.alt}/>
                </div>
            );
        default:
            return null
    }
}