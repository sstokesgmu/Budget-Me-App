
import Form from './Form';
import {} from '../test'
import IconButton from '../components/Common/Buttons/Icon-Button';
import TextButton from '../components/Common/Buttons/Text-Button';

export default function Test(){

    const handleEvent = (event) => {
        event.preventDefault();
        alert("Hello");
    }

    return (
        <>
            <IconButton style={'icon_plus'} func={handleEvent}/>
            <IconButton style={'icon_minus'} func={alert}/>
            <TextButton style={'button_hover'} text={"How are you"} func={alert}/>
        </>
    );
}