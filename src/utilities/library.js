//import catergories from './categories'

export default class Library{
    /**
     * We are trying to match the type of the data to the predefined values  
     * @param {array} Types [{class, func}] where class:constructor | undefined and func: reference to a function 
     * @param {object} data 
     * @returns {function} the reference to the function
     */
    static MatchDataToComponent(Types,data){
        let result = Types.filter(element => {
            if(typeof element.class === 'function') return data instanceof element.class;
            return false;
        });
        // If the data matches a certain class passed in from the array
        if (result.length === 0 ) 
            return Types[0].func;
        //Else: 
        return result[0].func;
    }
}


export class Observer {

    #accountInfo;
    #bucketInfo;
    constructor(){};

    async Peek(){
        console.log("called");
        const [accounts,buckets] = await Promise.all([
        fetch('https://budgetapp-vdsp.onrender.com/api/accounts?fields=account_num,bucket,current_amount,type')
            .then(element => element.json()),
        fetch('https://budgetapp-vdsp.onrender.com/api/transactions?fields=transactions,account_id,_id')
            .then(element => element.json())
        ])
        this.accountInfo = [...accounts];
        this.bucketInfo = [ ... buckets];
    }

    getAccountInfo(){
        return this.accountInfo
    }
    getBucketInfo(){
        return this.bucketInfo
    }
}