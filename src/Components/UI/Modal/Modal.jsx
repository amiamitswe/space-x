import React from 'react';

const Modal = (props) => {
   const { closeModal } = props;
   return (
      <div className="modal fade d-block opacity-100" >
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" >Modal title</h5>
                  <button onClick={closeModal} type="button" className="btn-close"></button>
               </div>
               <div className="modal-body">
                  ...
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal} >Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
