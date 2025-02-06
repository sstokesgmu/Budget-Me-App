import React, { useState, useEffect } from 'react';

import './form.scss';
import Library from '../utilities/Library';
import { Blank_Account,Blank_Transaction} from '../utilities/categories';
import TextButton from '../components/Common/Buttons/Text-Button';
import NavBar from '../components/Common/NavBar';

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
                    <select name="accountType" value={formValue.type} onChange={handleChange}>
                        <option value="Savings">Savings</option>
                        <option value="Checkings">Checking</option>
                    </select>
                </label>
                <label>
                    Account Number
                    <input type="number" name="accountNumber" value={formValue.number} onChange={handleChange}/>
                </label>
                <label> Starting Balance
                <input type="number" name="balance" value={formValue.start} 
                        placeholder={0.00} onChange={handleChange}/>
                </label>
                {/* Other account fields */}
            </div>
        );
    }
    static createTransaction() {
        // Return a JSX form for Transaction
        return (
            <div>
                <h3>Create Transaction Form</h3>
                <input type="text" placeholder="Transaction Details" name="transactionDetails" />
                {/* Other transaction fields */}
            </div>
        );
    }

    static updateAccount() {
        return (
            <div>
                <h3>Update Account Form</h3>
                <input type="text" placeholder="Update Account Name" name="accountName" />
            </div>
        );
    }
    static updateTransaction() {
        return (
            <div>
                <h3>Update Transaction Form</h3>
                <input type="text" placeholder="Update Transaction Details" name="transactionDetails" />
            </div>
        );
    }

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
let dictionary = new Map();
dictionary.set(Types.CREATE, [
    { class: Blank_Account, func: FormLibrary.createAccount },
    { class: Blank_Transaction, func: FormLibrary.createTransaction }
]);

export default function Form() {
    const [clear, setClear] = useState(false); // Reset back to initial state
    const [formCreated, setFormCreated] = useState(false);
    const [formValue, setFormValue] = useState(null);
    const [requestType, setRequestType] = useState(Types.CREATE); // Default to CREATE
    const [entityType, setEntityType] = useState("Account"); // Default to Account


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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
        setFormCreated(false);
        // Choose which form to submit based on requestType and entityType
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
                    formComponent = FormLibrary.createTransaction();
                } 
                break;
            case Types.UPDATE:
                if(entityType === "Account")
                    formComponent = FormLibrary.updateAccount();
                else if(entityType === "Transaction")
                    formComponent = FormLibrary.updateTransaction();
                break;
            case Types.DELETE:
                if(entityType === "Account")
                    formComponent = FormLibrary.deleteAccount();
                else if (entityType === "Transaction")
                    formComponent = FormLibrary.deleteTransaction();
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
