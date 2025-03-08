export default function Carousel()
{
    return <section>
            <span style={{display:'flex', justifyContent:'space-evenly', height:'100px'}}>
                <div style={{display:'flex', flexDirection:'column', height:'100%', width:'350px', border:'solid', justifyContent:'center',borderColor:'black', backgroundColor:'lightgray'}}>
                    <div style={{flex: '0 0 20%', display:'flex',flexDirection:'row', gap:'1em'}}>
                        <span style={{flex:'0 0 30%', textAlign:'center', fontSize:'100%', margin:0}}>W</span>
                        <p style={{flex:'0 0 70%', fontSize:'3rem', margin:0}}>Company</p>
                    </div>
                    <div style={{flex: '0 0 100%', display:'flex', width:'90%', justifyContent:'center', position:'relative', 'left': '15px', flexDirection:'column', backgroundColor:'gray'}}>
                            <p style={{fontSize:'100%', fontWeight:'bold', margin:0, textAlign: 'center'}}>$100.00</p>
                            <p style={{marginTop:'20px', textAlign:'center'}}>Percentage</p>  
                    </div>
                </div>
            </span>
            <h2>Scroll Bar</h2>
    </section>
}

//
//Function to create items