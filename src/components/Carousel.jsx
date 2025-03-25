export default function Carousel({array,component:Component,options = {}})
{
    return <section style={{ display:'flex',gap:'30px', flexDirection:'row',}}>
            {array.map((element,index) =>{
                return !options? <Component key={index} data={element}/> :
                        <Component key={index} data={element} options={{id:index, ...options}}/> 
            })}
    </section>
}

//
//Function to create items