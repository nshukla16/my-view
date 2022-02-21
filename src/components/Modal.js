import React, { useEffect } from "react"; 
import "./Modal.css"

function Modal({closeModal}){

  const closeOnEscapeKeyDown = (e) => {                                         {/*close modal by escape key (but it is not working)*/}
    if((e.charCode || e.keyCode)===27) {
      closeModal.onClose()
    }
  }
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
        <div className="modalBackground" onClick={() => closeModal(false)}>     {/*close the complete modal click outside or inside*/}
          <div className="modalContainer" onClick={e => e.stopPropagation()}>   {/*to stop close modal when click inside*/}
            <div className="titleCloseBtn">
              <button onClick={() => closeModal(false) } > X </button>
            </div>
            <div className="title">Are you sure</div>
            <div className="body"></div>
            <div className="footer">
              <button onClick={() => closeModal(false) } id="cancelBtn">Cancel</button>
              <button>Confirm</button>
            </div>
          </div>
        </div>
        
    );
}

export default Modal;