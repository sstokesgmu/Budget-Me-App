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
                        <h1>{data.total}</h1>
                        <h2>Total Number of Accounts Tracked: 1</h2>
                    </div>
                </div>
            );
        case "card-profile-big": 
            return (
                <div>
                     <img src={data.src} alt={data.alt}/>
                </div>  
            );
        case "card-profile-small": 
            return (
                <div>
                     <img src={data.src} alt={data.alt}/>
                </div>  
            );
        
        
        case 'card-horiz-slim-01':
            return (
                <div>
                    <div>
                        
                    </div>
                </div>
            );
        default:
            return null
    }
}