export class Account {
    constructor({account_num,type,date_opened,date_closed,starting_amount,current_amount}){
        this.account_num=account_num, this.type=type,this.dateOpen=date_opened,
        this.dateClosed=date_closed, this.start=starting_amount, this.current=current_amount
    }
}

export class Blank_Account{
    constructor(){
        this.account_num = null, this.type = null, this.amount = null
    }
}

export class AccountOPS {
    constructor ({account_num, starting_amount, current_amount}){
        this.number = account_num, this.starting_amount = starting_amount, this.current_amount=current_amount
    }
    balancesOverTime = [];
    setBalanceOverTime(beginingBalance, bucketId, timeframe) {
        this.balancesOverTime.push({duration: timeframe, bucketId: bucketId, balance: beginingBalance})
    }
    getBalanceOverTime(timeframe){
        return this.balancesOverTime.filter(element =>{ 
            console.log(element.duration);
            return element.duration === timeframe
        });
    }
}

export class Transaction {
    constructor({date, amount, trans_type, comp_name}) {
        this.date = date, this.amount = amount, this.type = trans_type, this.company = comp_name;
    }
}

export class Blank_Transaction {
    constructor(){
        this.amount = null, this.type = null, this.company = null;
    }    
}
export class Bucket{
    constructor ({account_id, start_date, end_date, transactions, _id, name}){
        this.sourceId = account_id, this.start_date = start_date, this.end_date = end_date, 
        this.transactions = transactions.map(element => new Transaction(element)), this.id = _id,
        this.name = name
    }
    getObjectId(){return this.id};
    calculateDuration(){};
    calculateTheSumOfTransactions(){
        let sum = 0;
        this.transactions.forEach(element => {
            const withdrawl_re = new RegExp("\\bwithdrawl\\b", "i");
            if (withdrawl_re.test(element.type)) {
                // Logic for matching withdrawal
                console.log("Withdrawal found:", element);
                sum -= element.amount;
            } else {
                sum += element.amount;
            }
        })
        return sum;
    }
}
