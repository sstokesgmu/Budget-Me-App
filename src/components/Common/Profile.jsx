import react from 'react'
import './profile.scss'

// /**
//  * @param {person}  
//  * @returns 
//  * source:https://www.webfx.com/blog/web-design/circular-images-css/
//  */
// function Icon({person, size}) {
//     return (
//         <img
//             className = "avatar" 
//             src = "src/assets/sfa3-akuma2.jpg"
//             alt= {person.name}  
//             width="500"
//             height="500"
//         />
//     );
// }
const Types = {
    BIG: "profile_big",
    SMALL: "profile_small"
}

export default function Profile({renderStyle, data}){
    return (
        <section className={renderStyle}>
            {selectCard(renderStyle,data)}
        </section>
    );
}

function selectCard(style,data){
    switch (style){
        case Types.BIG:
        case Types.SMALL:
            return (<div>
                        <img src={data.src} alt={data.alt}/>
                    </div>);
    }
}


