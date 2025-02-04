import react from 'react';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

//! If we need render and style additional icons besides the two consider the building
//! through the Dictionary look up method 
// const Types = {name:cssStyle}
/* class ButtonLibrary extends Library{
    static MatchDataToComponent(Types, data){
        return super.MatchDataComponent(Types,data)
    }
}*/

const Types = {
    PLUS: 'icon_plus',
    MINUS: 'icon_minus',
}

export default function IconButton({style, func}){
    return(
        <>
            {selectButton(style,func)}
        </>
    );
}

function selectButton(style, eventFunc){
    switch (style) {
        case Types.PLUS:
            return <CiCirclePlus onClick={eventFunc}/>
        case Types.MINUS: 
            return <CiCircleMinus onClick={eventFunc}/>
    }
}


