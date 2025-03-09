import CarouselCard from "./Carousel_Card"
export default function Carousel()
{
    return <section style={{ display:'flex',gap:'10px', flexDirection:'row',}}>
            <CarouselCard/>
            {/* <span style={{display:'flex', justifyContent:'space-evenly', height:'100px'}}>
                <div style={{display:'flex', flexDirection:'column', height:'100%', width:'200px', border:'solid', justifyContent:'center',borderColor:'black', backgroundColor:'lightgray'}}>
                    <div style={{flex: '0 0 10%', display:'flex',flexDirection:'row', gap:'1em', position:'relative'}}>
                        <span style={{flex:'0 0 10%', textAlign:'center', fontSize:'100%', margin:0}}>W</span>
                        <p style={{flex:'0 0 5%', fontSize:'100%', margin:0}}>Company</p>
                    </div>
                    <div style={{flex: '0 0 70%', display:'flex',  width:'94%', height:'10%',  justifyContent:'center', position:'relative', 'left': '6px', flexDirection:'column', backgroundColor:'gray'}}>
                        <p style={{fontSize:'190%', fontWeight:'bold', margin:0, textAlign: 'center'}}>$100.00</p>
                        <p style={{ textAlign:'center', margin:0, fontSize:'80%' }}>(15%)</p>     
                    </div>
                </div>
            </span> */}
    </section>
}

//
//Function to create items