import react from 'rect';


const Types = {
    BASIC: "card_basic",
}

export default function ImageCard(renderStyle, data){
    return (
        <section className={renderStyle}>
            {selectCard(style,data)}
        </section>
    );
}

function selectCard(style, data){
    switch (style){
        case Types.Basic:
            return <div>This is an image card</div>
    }
}