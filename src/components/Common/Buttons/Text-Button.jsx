import react from 'react';
import IconButton from './Icon-Button';

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

export default function TextButton({style, text, func}){
    return(
        <>
            <div style={{border:"solid"}}>
                {selectButton(style,text,func)}
            </div>
        </>
    );
}

function selectButton(style,text,func){
    switch (style) {
        case Types.HOVER:
            return (
                <div className={style} onClick={func}>
                    <h2>{text}</h2>
                </div>
            );
    }
}

