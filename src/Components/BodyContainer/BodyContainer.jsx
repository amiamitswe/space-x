
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { listSpace } from '../../redux/actions/spaceList';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal/Modal';
const BodyContainer = () => {
   const dispatch = useDispatch();
   const [showModal, setShowModal] = useState(false);
   const showModalHandler = () => {
      setShowModal(true);
   };

   const closeModalHandler = () => {
      setShowModal(false);
   };

   useEffect(() => {
      dispatch(listSpace({ limit: 50 }));
   }, [dispatch]);


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

export default BodyContainer;;
