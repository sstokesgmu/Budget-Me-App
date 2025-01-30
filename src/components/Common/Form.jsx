import react, {useState, useEffect} from 'react';
import { calcVolumePoint } from 'three/examples/jsm/curves/NURBSUtils.js';



export default function Form ({type, title}){

    const [inputValue, setInputValue] = useState(null);
    const c = undefined;

    const getData = async (a) => {

        const b = await fetch('http://192.168.1.162:8080/api/accounts').then(data => data.json());
        //Object deconstrunct
        c = b;
    }


    if(type == "update-account" | "update-transaction"){
        useEffect(() => {
            getData(type);
            console.log("Update form data is mounted");
        },[])
    }
    





    const handleChange = (event) => {


    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FormSubmitted')
    }
    const redirect = (event) => {
        event.preventDefault();
        console.log('Form not Submitted redirect');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            {validateFormType(type, inputValue,handleChange, c)};
            <button type="submit">Submit</button>
            <button type="submit" onClick={redirect}>Cancel</button> {/*Redirect to the previous page*/}
        </form>
    );
}

function validateFormType(type,inputValue, handleChange, otherdata = undefined) {
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
            <label>Account Type</label>
            <select name="accountType" onChange={handleChange}>
                <option value="Saving">Saving</option>
                <option value="Checking">Checking</option>
            </select>
            <label>Current Amount</label>
            <input type="number" min ="1" step="any" placeholder={0.00} onChange={handleChange}/>
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


