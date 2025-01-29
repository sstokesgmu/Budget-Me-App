import react from 'react'

export default function Profile(){
 
    return <Icon person={{name:"Akuma"}} size="S"/>
}
/**
 * @param {person}  
 * @returns 
 * source:https://www.webfx.com/blog/web-design/circular-images-css/
 */
function Icon({person, size}) {
    return (
        <img
            className = "avatar" 
            src = "src/assets/sfa3-akuma2.jpg"
            alt= {person.name}  
            width="500"
            height="500"
        />
    );
}

