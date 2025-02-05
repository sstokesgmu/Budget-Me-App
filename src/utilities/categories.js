export class Account {
    constructor({account_num,type,date_opened,date_closed,starting_amount,current_amount}){
        this.account_num=account_num, this.type=type,this.dateOpen=date_opened,
        this.dateClosed=date_closed, this.start=starting_amount, this.current=current_amount
    }
}

export class Transaction {
    constructor({date, amount, trans_type, comp_name}) {
        this.date = date, this.amount = amount, this.type = trans_type, this.company = comp_name;
    }
}

export class Bucket{
    constructor({date,amount,accountNumber}){
        this.data = date, this.amount = amount, this.accountNumber = accountNumber 
    }
}
