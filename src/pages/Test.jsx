import react from 'react';
import NavBar from '../components/Common/NavBar'
import Form from '../components/Common/Form';
import {} from '../test'

export default function Test(){

    return (
        <>
            <NavBar/>
            <Form type={'create-transaction'} title={'Create Transaction'}/>
        </>
    );
}