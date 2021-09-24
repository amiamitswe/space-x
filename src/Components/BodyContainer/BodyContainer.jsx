
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal/Modal';

const BodyContainer = () => {
   const [showModal, setShowModal] = useState(false);
   const showModalHandler = () => {
      setShowModal(true);
   };

   const closeModalHandler = () => {
      setShowModal(false);
   };
   return (
      <div className='container mt-4'>
         <div className="row">
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
            <Cart onClick={showModalHandler} />
         </div>
         {showModal && <Modal closeModal={closeModalHandler} />}
      </div>
   );
};

export default BodyContainer;
