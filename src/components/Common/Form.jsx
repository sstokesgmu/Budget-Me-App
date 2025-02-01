import react, {useState, useEffect} from 'react';
import { calcVolumePoint } from 'three/examples/jsm/curves/NURBSUtils.js';

export default function Form ({type, title}){

    
    const FormType = {
        "create-account": {accountType: '', accountNum: '', balance: ''},
        "update-account": {accountType: '', balance: ''},
        "create-transaction": {company:'', transType:'', amount:''},
        "update-transaction": {},
    };
    
    
    

    // let c = undefined;
    // const getData = async (a) => {

    //     const b = await fetch('http://192.168.1.162:8080/api/accounts').then(data => data.json());
    //     //Object deconstrunct
    //     c = b;
    // }



    // if(type == "update-account" | "update-transaction"){
    //     useEffect(() => {
    //         getData(type);
    //         //configure state pass
    //         console.log("Update form data is mounted");
    //     },[])
    // }
    const [formValue, setFormValue] = useState(ValidateAndReturn(type, FormType))
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormValue({
            ...formValue, 
            [name]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted')
    }
    const redirect = (event) => {
        event.preventDefault();
        console.log("Redirect back to Dashboard");
        console.log('Form not Submitted redirect');
    }
    const RenderFunctions = {
        "create-account": CreateAccount,
        "update-account": UpdateAccount,
        "create-transaction": CreateTransaciton,
        "update-transaction": UpdateTransaction,
    }
    const ComponentToRender = ValidateAndReturn(type, RenderFunctions);
    return (
        <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            {ComponentToRender(formValue, handleChange)}
            <button type="submit">Submit</button>
            <button type="submit" onClick={redirect}>Cancel</button> {/*Redirect to the previous page*/}
        </form>
    );
}

function ValidateAndReturn(type, returnValue)
{
    switch(type) {
        case 'create-account':
            return returnValue['create-account'];
        case 'update-account':
            return returnValue['update-account'];
        case 'create-transaction':
            return returnValue['create-transaction'];
        case 'update-transaction': 
            return returnValue['update-transaction'];
    }
}

function CreateAccount(stateProps, handleChange) {
    return(
        <>
            <label>Account Type
                <select name="accountType" value={stateProps.accountType} onChange={handleChange}>
                    <option value="Saving">Saving</option>
                    <option value="Checking">Checking</option>
                </select>
            </label>
            <label>
                Account Number
                <input type="number" name="accountNum" value={stateProps.accountNumber} onChange={handleChange}/>
            </label>
            <label>Current Amount
            <input type="number" name="balance" value={stateProps.balance} 
            placeholder={0.00} onChange={handleChange}/>
            </label>
        </>
    );
}

function UpdateAccount(stateProps, handleChange) {
    return (
        <>
            <h2>Account #</h2>
            <label> Account Type
                <select name="accountType" value={stateProps.account} onChange={handleChange}>
                    <option value='Saving'>Saving</option>
                    <option value='Checking'>Checking</option>
                </select>
            </label>
            <label>Current Amount
                <input type='number' name='balance' value={stateProps.balance} placeholder={1000} onChange={handleChange}/> 
            </label>
        </>
    );

}

function CreateTransaciton(stateProps,handleChange) {
    return(
        <>
            <h2>Account #</h2>
            <label> Company Name
                <input type='text' name='company' value={stateProps.company} placeholder='Enter Text Here' onChange={handleChange} />
            </label>
            <label> Transaction Type
                <select name='transType' value={stateProps.transType} onChange={handleChange}>
                    <option value='Withdrawl'>Withdrawl</option>
                    <option value='Deposit'>Deposit</option>
                </select>
            </label>
            <label>Amount
                <input type='number' name='amount' value={stateProps.amount} placehodler={(0.00).toString()} onChange={handleChange}/>
            </label>
        </>
    );
}

function UpdateTransaction() {
    <>
        <h2>Account #</h2>
        <label> Company Name
            <input type='text' name='company' value={stateProps.company} placeholder='Enter Text Here' onChange={handleChange} />
        </label>
        <label> Transaction Type
            <select name='transType' value={stateProps.transType} onChange={handleChange}>
                <option value='Withdrawl'>Withdrawl</option>
                <option value='Deposit'>Deposit</option>
            </select>
        </label>
        <label>Amount
            <input type='number' name='amount' value={stateProps.amount} placehodler={(0.00).toString()} onChange={handleChange}/>
        </label>
    </>
}


