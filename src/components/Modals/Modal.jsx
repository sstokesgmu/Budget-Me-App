import react,{useState} from 'react';
import Modal from 'react-modal';

export default function Modal_Example(){
 const [modalIsOpen, setModalToOpen] = useState(false);
    const openModal = () => setModalToOpen(true);
    const closeModal = () => setModalToOpen(false);

    return (
        <section>
            <div>
                <button onClick={openModal}>Open</button>
                <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                    <h2>Modal Title</h2>
                    <button onClick={closeModal}>Close</button>
                    <div>Modal Content</div>
                </Modal>
            </div>
        </section>
    );    
}