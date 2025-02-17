import Library from "./library";


export default class RouteLibrary extends Library {
    static async createNewAccount(data){

        console.log(data);
        //Format the data 
        const account = {
            account_num: parseInt(data.account_num), // Convert to number
            type: data.type || 'Checking', // Set default value if null
            starting_amount: data.amount ? parseInt(data.amount) : 0, // Convert to number
        };

        const response = await fetch('https://budgetapp-vdsp.onrender.com/api/users/create/accounts', {
            method:"PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({account})
        });

        return response;
    }

    static async createNewTransaction(data){

        console.log(data);
        const {accountId} = data;


        const response = await fetch(`https://budgetapp-vdsp.onrender.com/api/transactions/add/${accountId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"transaction":data})
        });
        return response;
    }

    static async updateTypeOfAccount(data)
    {
        console.log(data);
        const {accountId} = data
        const response = await fetch(`https://budgetapp-vdsp.onrender.com/api/accounts/update-type/${accountId}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"type": data})
        })
        return response;
    }

    static async updateAccountBalance(data){
        const {accountId, amount} = data


        const response = await fetch(`https://budgetapp-vdsp.onrender.com/api/accounts/update-balance/${accountId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"balance": amount})
        })
        return response;
    }
}
