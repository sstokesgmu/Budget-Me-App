import react,{useState} from 'react';
import Modal from 'react-modal';

export default function ModalForm(){
    const [modalIsOpen, setModalToOpen] = useState(false);
    const [formValue, setFormValue] = useState({});



    const openModal = () => setModalToOpen(true);
    const closeModal = () => setModalToOpen(false);

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setFormValue({...formValue, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("clicked");
        alert("Clicked Submit");
        closeModal();
    }

    const handleClose = (event) => {
        event.preventDefault();
        alert("Clicked Close");
    }

    return (
        <section>
            <div>
                <button onClick={openModal}>Open</button>
                <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div>Modal Content</div>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>
        </section>
    );    
}