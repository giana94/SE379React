import React from 'react';
import ReactDOM from 'react-dom';

// export const Modal = (props) => {
//     return (
//         <>
//         <div className="modal">
//             <p>Did you complete this task?</p>
//             <button onClick={() => props.dismissModal()} className="btn btn-highlight">Cancel</button>
//             <button onClick={() => props.dismissModal()} className="btn">Confirm</button>
//         </div>
//         <div onClick={() => props.dismissModal()} className="backdrop"></div>
//         </>
//     );
// };



export const Modal = (props) => {
    const rootModalElement = document.getElementById('root-modal');
  
    return ReactDOM.createPortal(
      <>
        <div className="modal">
          <p>Did you complete this task?</p>
          <button
            onClick={() => {
              props.dismissModal();
            }}
            className="btn btn-highlight"
          >
            Cancel
          </button>
          <button onClick={() => {}} className="btn">
            Confirm
          </button>
        </div>
        <div onClick={() => {}} className="backdrop" />
      </>,
      rootModalElement
    );
  };