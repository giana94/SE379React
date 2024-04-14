import { Modal } from './Modal';
import {useState} from 'react';

const Todo = () => {
    const [showModal, setShowModal] = useState(false);
    

    const onDissmissModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div class="card">
                <div class="card-content">
                    <h2>To Do </h2>
                    <button onClick={() => setShowModal(true)} class="btn">Done</button>
                </div>
            </div>
            {/* {showModal && <Modal dismissModal={onDissmissModal}/>} */}
            {
                showModal ? (
                    <div id="first-child">
                    <div id="second-child">
                        <div id="third-child">
                        <div id="fourth-child" style={{ color: 'yellow', fontSize: '2em' }}>
                            <Modal dismissModal={onDissmissModal} />
                        </div>
                        </div>
                    </div>
                    </div>
                ) : null 
            }
        </>
    );
};

export default Todo;