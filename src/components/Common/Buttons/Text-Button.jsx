import react from 'react';
import IconButton from './Icon-Button';
import './button.scss'

//! If we need render and style additional icons besides the two consider the building
//! through the Dictionary look up method 
/* class ButtonLibrary extends Library{
    static MatchDataToComponent(Types, data){
        return super.MatchDataComponent(Types,data)
    }
}*/

const Types = {
    HOVER: 'button_hover',
}

export default function TextButton({type,  text, func}){
    return(
        <>
            {selectButton(type,text,func)}
        </>
    );
}

function selectButton(type,text,func){
    switch (type) {
        case Types.HOVER:
            return (
                <div onClick={func}>
                    <h2>{text}</h2>
                </div>
            );
    }
}

