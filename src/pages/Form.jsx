import React, { useState, useEffect } from 'react';

import './form.scss';
import Library, {Observer} from '../utilities/Library';
import { Blank_Account,Blank_Transaction} from '../utilities/categories';
import NavBar from '../components/Common/NavBar';

import RouteLibrary from '../utilities/routes';

const Types = {
    CREATE: "create-form",
    UPDATE: "update-form",
    DELETE: "delete-form"
}

class FormLibrary extends Library {
    // static MatchDataToComponent(Types, data) {
    //     return super.MatchDataToComponent(Types, data);
    // }
    static createAccount(formValue,handleChange) {
        // Return a JSX form for Account
        return (
            <div>
                <h3>Create Account</h3>
                    <label> Account Type
                    <select name="type" value={formValue.type} onChange={handleChange}>
                        <option value="None">None</option>
                        <option value="Savings">Savings</option>
                        <option value="Checkings">Checking</option>
                    </select>
                </label>
                <label>
                    Account Number
                    <input type="number" name="account_num" value={formValue.account_num} onChange={handleChange}/>
                </label>
                <label> Starting Balance
                <input type="number" name="amount" value={formValue.amount} 
                        placeholder={0.00} onChange={handleChange}/>
                </label>
                {/* Other account fields */}
            </div>
        );
    }
    static createTransaction(formValue,handleChange) {
        // Return a JSX form for Transaction
        return (
            <div>
                <h3>Create Transaction Form</h3>
                <label> Account
                    <input type="number" name="accountId" value={formValue.accountId} onChange={handleChange}/> 
                </label>
                <label>Transaction Type
                    <select name="type" value={formValue.type} onChange={handleChange}>
                        <option value="Withdrawl">None</option>
                        <option value="Withdrawl">Withdrawl</option>
                        <option value="Deposit">Deposit</option>
                    </select>
                </label>
                <label> Amount
                    <input type="number" name="amount" value={formValue.amount} placeholder={0.00} onChange={handleChange}/>
                </label>              
                <label> Company
                    <input type="text" name="company" value={formValue.company} onChange={handleChange}/> 
                </label>
                {/* Other transaction fields */}
            </div>
        );
    }
    static updateAccountBalance(formValue,handleChange) {
        return (
            <div>
                <h3>Update Account Form</h3>
                <label> Account
                    <input type="number" name="accountId" value={formValue.accountId} onChange={handleChange}/> 
                </label>
                <label> Current Balance
                <input type="number" name="amount" value={formValue.amount} 
                        placeholder={0.00} onChange={handleChange}/>
                </label>
            </div>
        );
    }
    // static updateTransaction() {
    //     return (
    //         <div>
    //             <h3>Update Transaction Form</h3>
    //             <input type="text" placeholder="Update Transaction Details" name="transactionDetails" />
    //         </div>
    //     );
    // }

    static deleteAccount() {
        return (
            <div>
                <h3>Delete Account Form</h3>
                <button>Delete Account</button>
            </div>
        );
    }
    static deleteTransaction() {
        return (
            <div>
                <h3>Delete Transaction Form</h3>
                <button>Delete Transaction</button>
            </div>
        );
    }
}


export default function Form() {
    const [clear, setClear] = useState(false); // Reset back to initial state
    const [formCreated, setFormCreated] = useState(false);
    const [formValue, setFormValue] = useState(null);
    const [requestType, setRequestType] = useState(Types.CREATE); // Default to CREATE
    const [entityType, setEntityType] = useState("Account"); // Default to Account
    const [observerData, setObserver] = useState(null);


   

    const [isMounted, setMounted] = useState(false);
 
    const observer = new Observer();

    useEffect(()=>{
        observer.Peek().then(() => {
            setObserver({
                accounts: observer.getAccountInfo(),
                buckets: observer.getBucketInfo()
            })
        })

        setMounted(true);
    },[])

    useEffect(() => {
        console.log("hello from useEffect");
        if(entityType === "Account")
            setFormValue(new Blank_Account());
        else if (entityType === "Transaction")
            setFormValue(new Blank_Transaction());
    },[entityType])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }
    const createForm = (e) => {
        e.preventDefault();
        setFormCreated(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formValue){

            switch (requestType){
                case Types.CREATE:
                    if (entityType === "Account") {
                        RouteLibrary.createNewAccount(formValue);
                    } else if (entityType === "Transaction") {
                        RouteLibrary.createNewTransaction(formValue)
                    }
                    break;
                case Types.UPDATE:
                    if(entityType === "Account") {
                        RouteLibrary.updateAccountBalance(formValue);
                    }
                    break;
            }
        }
        
    
        setFormCreated(false);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        alert("Form Cancelled");
        setClear(true);
        setFormValue(null);
        setFormCreated(false);
    }

    const selectForm =() => {
        let formComponent = null;
        switch(requestType){
            case Types.CREATE:
                if(entityType === "Account"){
                    formComponent = FormLibrary.createAccount(formValue,handleChange);
                } else if (entityType === "Transaction"){
                    formComponent = FormLibrary.createTransaction(formValue,handleChange);
                } 
                break;
            case Types.UPDATE:
                if(entityType === "Account")
                    formComponent = FormLibrary.updateAccountBalance(formValue,handleChange);
                else if(entityType === "Transaction")
                    formComponent = FormLibrary.updateTransaction(formValue,handleChange);
                break;
            case Types.DELETE:
                if(entityType === "Account")
                    formComponent = FormLibrary.deleteAccount(formValue, handleChange);
                else if (entityType === "Transaction")
                    formComponent = FormLibrary.deleteTransaction(formValue,handleChange);
                break;
            default:
                break;    
        }
        return formComponent; // Return the component to be rendered
    }

   
    return (
        <>
            <NavBar />
            <section className='form-container'>
                <h2 style={{ fontSize: "4rem", border: "solid" }}>Form Title</h2>

                <pre style={{ width: "100%",maxHeight:"350px", whiteSpace: "pre-wrap", border: "1px solid #ddd", padding: "10px", overflowY:"auto"}}>
                    {isMounted && JSON.stringify(observerData, null, 2)}
                </pre>

                <section className='form-contents'>
                    <div>
                        <select value={requestType} onChange={(e) => setRequestType(e.target.value)}>
                            <option value={Types.CREATE}>CREATE</option>
                            <option value={Types.UPDATE}>UPDATE</option>
                            <option value={Types.DELETE}>DELETE</option>
                        </select>
                        <select value={entityType} onChange={(e) => setEntityType(e.target.value)}>
                            <option value={"Account"}>Account</option>
                            <option value={"Transaction"}>Transaction</option>
                        </select>
                        <button onClick={createForm}>Create Form</button>
                    </div>
                    <div style={{ border: "solid", padding: "0px", width: "80%", height: "50vh", marginBottom: "20px", marginTop: "20px" }}>
                        {formCreated && selectForm()}
                    </div>
                </section>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </section>
        </>
    );
}
