import react, {useState, useEffect} from 'react';
import { calcVolumePoint } from 'three/examples/jsm/curves/NURBSUtils.js';



export default function Form ({type, title}){

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
    
    const [inputValue, setInputValue] = useState({accountType: '',inputType: ''});
    const handleChange = (event) => {
        const {name,value} = event.target;
        setInputValue({
            ...inputValue, 
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

    return (
        <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            {/* {validateFormType(type, inputValue,handleChange, c)} */}
            <label>Account Type
            <select name="accountType" value={inputValue.accountType} onChange={handleChange}>
                <option value="Saving">Saving</option>
                <option value="Checking">Checking</option>
            </select>
            </label>
            <label>Current Amount
            <input type="number" name="inputType" value={inputValue.inputType} 
            placeholder={0.00} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
            <button type="submit" onClick={redirect}>Cancel</button> {/*Redirect to the previous page*/}
        </form>
    );
}

function validateFormType(type,inputValue, handleChange) {
    switch (type) {
        case 'create-account':

            return createAccount(inputValue, handleChange);
        case 'update-account':
            return updateAccount();
        case 'create-transaction':
            break;
        default:
            break;
    }
}

function createAccount(inputValue, handleChange) {
    return(
        <>
            <label>Account Type
            <select name="accountType" onChange={handleChange}>
                <option value="Saving">Saving</option>
                <option value="Checking">Checking</option>
            </select>
            </label>
            <label>Current Amount
            <input type="number" min ="1" step="any" placeholder={0.00} onChange={handleChange}/>
            </label>
        </>
    );
}

// async function updateAccount() {
//         <>
//             <label>Account Type</label>
//             <select>
//                 <option>Savings</option>
//                 <option>Checking</option>
//             </select>
//             <label>Current Amount</label>
//             <input placeholder{}/> 
//         </>
// }


