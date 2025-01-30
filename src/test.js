
export function Add(){

}
export function Subtract(){
    
}

export function Cumulative(){

    //Api call to accounts to return the current value of each account 
    const a = [100, 200, 300];
    let value = 0; 
    a.forEach(number => value += number);
    return value; 
} 
