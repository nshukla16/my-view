import { useState } from 'react';
import Modal from './Modal';

import Backdrop from './Backdrop';

function Todo(props) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="card">
            {/* <h2>{props.val}</h2> */}
            <div className="actions">
                { openModal && <Modal closeModal={setOpenModal} />}
                <button id="clickBtn" onClick={()=>{setOpenModal(true);}} >Open</button>
            </div>
            <div>
                
                <Backdrop />
            </div>
        </div>
        
    );
}

export default Todo; 