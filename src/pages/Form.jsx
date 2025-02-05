import React, { useState } from 'react';

import './form.scss';
import Library from '../utilities/Library';
import { Account, Transaction } from '../utilities/categories';
import TextButton from '../components/Common/Buttons/Text-Button';
import NavBar from '../components/Common/NavBar';

const Types = {
    CREATE: "create-form",
    UPDATE: "update-form",
    DELETE: "delete-form"
}

class FormLibrary extends Library {
    static MatchDataToComponent(Types, data) {
        return super.MatchDataToComponent(Types, data);
    }

    static createAccount() {}
    static createTransaction() {}

    static updateAccount() {}
    static updateTransaction() {}

    static deleteAccount() {}
    static deleteTransaction() {}
}

let dictionary = new Map();
dictionary.set(Types.CREATE, [
    { class: Account, func: FormLibrary.createAccount },
    { class: Transaction, func: FormLibrary.createTransaction }
]);

export default function Form() {
    const [clear, setClear] = useState(false); // Reset back to initial state
    const [formValue, setFormValue] = useState(null);
    const [requestType, setRequestType] = useState(Types.CREATE); // Default to CREATE
    const [entityType, setEntityType] = useState('Account'); // Default to Account

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
        // Choose which form to submit based on requestType and entityType
    }

    const handleCancel = (e) => {
        e.preventDefault();
        alert("Form Cancelled");
        setClear(true);
        setFormValue(null);
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
                            <option value="Transaction">Transaction</option>
                            <option value="Account">Account</option>
                        </select>

                        <button onClick={handleSubmit}>Submit</button>
                    </div>

                    <div style={{ border: "solid", padding: "0px", width: "80%", height: "50vh", marginBottom: "20px", marginTop: "20px" }}>
                        {/* {renderFormFields()} */}
                    </div>
                </section>

                <div>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </section>
        </>
    );
}
